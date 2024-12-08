import { connectToDatabase } from "../../utils/db";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { Name, Email, Service, Date, Time, Contact, selectedOption } =
        req.body;

      const { db } = await connectToDatabase();

      //   const appointment = {
      //     name,
      //     email,
      //     message,
      //     date: new Date(),
      //   };

      //   console.log("insert data", req.body);
      const ack = await db.collection("appointments").insertOne(req.body);

      const result = await db
        .collection("appointments")
        .findOne(ack.insertedId);

      res.status(201).json({ message: "Feedback saved successfully!", result });
      console.log("result", result);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Failed to save feedback!" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
