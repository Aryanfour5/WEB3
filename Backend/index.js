import express from "express";
import Moralis from "moralis";
import cors from "cors";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get("/allNft", async (req, res) => {
  try {
    const { query } = req;
    let NFTs;

    if (query.cursor) {
      NFTs = await Moralis.EvmApi.nft.getContractNFTs({
        address: query.address,
        chain: query.chain,
        cursor: query.cursor,
        limit: 10,
      });
    } else {
      NFTs = await Moralis.EvmApi.nft.getContractNFTs({
        address: query.address,
        chain: query.chain,
        limit: 10,
      });
    }

    const result = NFTs.raw;
    return res.status(200).json({ result });
  } catch (e) {
    console.log(e);
    console.log("something went wrong");
    return res.status(400).json();
  }
});

Moralis.start({
  apiKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6ImMzZGE5ZDY3LTlhZmEtNDI3Ni05YjIwLTE0YzFjZTFjYmI1YyIsIm9yZ0lkIjoiMzgzNDA4IiwidXNlcklkIjoiMzkzOTU3IiwidHlwZUlkIjoiNGQ2Nzc4OTQtYjBmZC00NDBlLWE4MjgtZjQxY2QyN2M0YWMzIiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3MTA3NTU5NjAsImV4cCI6NDg2NjUxNTk2MH0.vHk9MBc2jU93RxXb6EhpChesTxaENuD-E69-5KZwb6o",
}).then(() => {
  app.listen(port, () => {
    console.log(`Listening for API Calls on port ${port}`);
  });
});
