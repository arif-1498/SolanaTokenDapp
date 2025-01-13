export const ProgramId = "nyTWBM3CreJ2JBQMQxMkeTznfGvhH3rUtRxrsxv3uZ1";

export const battleCoin  = {
  version: "0.1.0",
  name: "anchor_token",
  instructions: [
    {
      name: "createMint",
      accounts: [
        {
          name: "admin",
          isMut: true,
          isSigner: true,
        },
        {
          name: "rewardTokenMint",
          isMut: true,
          isSigner: false,
        },
        {
          name: "metadataAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "tokenMetadataProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "rent",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "uri",
          type: "string",
        },
        {
          name: "name",
          type: "string",
        },
        {
          name: "symbol",
          type: "string",
        },
      ],
    },
    {
      name: "initPlayer",
      accounts: [
        {
          name: "playerData",
          isMut: true,
          isSigner: false,
        },
        {
          name: "player",
          isMut: true,
          isSigner: true,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: "killEnemy",
      accounts: [
        {
          name: "player",
          isMut: true,
          isSigner: true,
        },
        {
          name: "playerData",
          isMut: true,
          isSigner: false,
        },
        {
          name: "playerTokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "rewardTokenMint",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "associatedTokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: "heal",
      accounts: [
        {
          name: "player",
          isMut: true,
          isSigner: true,
        },
        {
          name: "playerData",
          isMut: true,
          isSigner: false,
        },
        {
          name: "playerTokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "rewardTokenMint",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "associatedTokenProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
  ],
  accounts: [
    {
      name: "PlayerData",
      type: {
        kind: "struct",
        fields: [
          {
            name: "health",
            type: "u8",
          },
        ],
      },
    },
  ],
  errors: [
    {
      code: 6000,
      name: "NotEnoughHealth",
      msg: "Not enough health",
    },
  ],
};
