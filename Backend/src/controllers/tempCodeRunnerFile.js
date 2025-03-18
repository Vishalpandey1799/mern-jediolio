import { CardDetails } from "../Models/CardModel.js";


async function testQuery() {
    const id = "67c5a6621aacade696f9d7b";
    const objectId = new mongoose.Types.ObjectId(id);
    const user = await CardDetails.findById({ id: id });
    console.log("User found:", user);
}


testQuery()