use anchor_lang::prelude::*;
use anchor_spl::{
    associated_token::AssociatedToken,
    metadata::{
        create_metadata_accounts_v3, mpl_token_metadata::types::DataV2, CreateMetadataAccountsV3,
        Metadata as Metaplex,
    },
    token::{self, InitializeMint},
    token_interface::{
        mint_to, Mint as MintInterface, MintTo, Token2022, TokenAccount as TokenInterfaceAccount,
        TokenInterface, Transfer,
    },
};
use spl_token_2022::extension::transfer_fee::{
    instruction::{
        initialize_transfer_fee_config, set_transfer_fee, transfer_checked_with_fee,
        withdraw_withheld_tokens_from_accounts,
    },
    TransferFee, TransferFeeAmount, TransferFeeConfig,
};

declare_id!("75j3Cm4BafX6Z32vVNbD7kpGAX3A27s85Q9oqTw9ozu5");

#[program]
mod fungible_token {
    use super::*;
    pub fn initialize_token(_ctx: Context<InitializeToken>, _metadata: TokenParams) -> Result<()> {
        let seeds = b"mint";
        let bumps = _ctx.bumps.mint;
        let singers: &[&[&[u8]]] = &[&[seeds, &[bumps]]];

        let token_data: DataV2 = DataV2 {
            name: _metadata.name,
            symbol: _metadata.symbol,
            uri: _metadata.uri,
            seller_fee_basis_points: 0,
            creators: None,
            collection: None,
            uses: None,
        };
        let metadata_accounts = CreateMetadataAccountsV3 {
            metadata: _ctx.accounts.metaplex_account.to_account_info(),
            mint: _ctx.accounts.mint.to_account_info(),
            mint_authority: _ctx.accounts.mint.to_account_info(),
            payer: _ctx.accounts.payer.to_account_info(),
            update_authority: _ctx.accounts.mint.to_account_info(),
            system_program: _ctx.accounts.system_program.to_account_info(),
            rent: _ctx.accounts.rent.to_account_info(),
        };

        let metadata_ctx = CpiContext::new_with_signer(
            _ctx.accounts.meta_data_program.to_account_info(),
            metadata_accounts,
            singers,
        );

        create_metadata_accounts_v3(metadata_ctx, token_data, false, true, None);

        msg!("Token initialized successfully");

        Ok(())
    }
    pub fn mint_token(_ctx: Context<MintTokens>, _amounts: u64) -> Result<()> {
        let seeds = b"mint";
        let bumps = _ctx.bumps.mint;
        let singers: &[&[&[u8]]] = &[&[seeds, &[bumps]]];
        let cpi_accounts = MintTo {
            authority: _ctx.accounts.mint.to_account_info(),
            to: _ctx.accounts.token_account.to_account_info(),
            mint: _ctx.accounts.mint.to_account_info(),
        };

        let cpi_context = CpiContext::new_with_signer(
            _ctx.accounts.token_program.to_account_info(),
            cpi_accounts,
            singers,
        );
        mint_to(cpi_context, _amounts);
        msg!("Token minted successfully");
        Ok(())
    }

    pub fn transfer_token(_ctx: Context<TransferToken>, amount: u64) -> Result<()> {
        Ok(())
    }

}
//init,seeds=[b"mint"],bump, payer=signer,mint::params.decimals ,mint::authority=mint
//#[account(init,payer=singer, seeds=[b"mint"], bump, mint::decimals=6,mint::authority=mint)]

#[derive(Accounts)]
#[instruction(_metadata:TokenParams)]
pub struct InitializeToken<'info> {
    #[account(init,space=32, payer=payer, seeds=[b"metadata",meta_data_program.key().as_ref(),mint.key().as_ref()], bump)]
    pub metaplex_account: UncheckedAccount<'info>,
    #[account(init,seeds=[b"mint"],bump, payer=payer, mint::decimals=6, mint::authority=mint)]
    pub mint: InterfaceAccount<'info, MintInterface>,
    #[account(mut)]
    pub payer: Signer<'info>,
    pub rent: Sysvar<'info, Rent>,
    pub token_program: Interface<'info, TokenInterface>,
    pub system_program: Program<'info, System>,
    pub meta_data_program: Program<'info, Metaplex>,
}

#[derive(Accounts)]
pub struct MintTokens<'info> {
    #[account(mut, seeds=[b"mint"], bump, mint::authority=mint)]
    pub mint: InterfaceAccount<'info, MintInterface>,
    #[account(init_if_needed, payer=signer, associated_token::mint=mint, associated_token::authority=signer )]
    pub token_account: InterfaceAccount<'info, TokenInterfaceAccount>,
    #[account(mut)]
    pub signer: Signer<'info>,
    pub rent: Sysvar<'info, Rent>,
    pub system_program: Program<'info, System>,
    pub token_program: Interface<'info, TokenInterface>,
    pub associated_token_program: Program<'info, AssociatedToken>,
}

#[derive(Accounts)]
pub struct TransferToken<'info> {
    #[account(mut)]
    pub source_account: InterfaceAccount<'info, TokenInterfaceAccount>,
    #[account(mut)]
    pub destination_account: InterfaceAccount<'info, TokenInterfaceAccount>,
    pub mint_account: InterfaceAccount<'info, MintInterface>,
    pub signer: Signer<'info>,
    pub token_program: Interface<'info, TokenInterface>,
}

#[derive(AnchorSerialize, AnchorDeserialize, Debug, Clone)]
pub struct TokenParams {
    pub name: String,
    pub symbol: String,
    pub uri: String,
}
