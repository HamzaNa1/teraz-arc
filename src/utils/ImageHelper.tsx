"use server";

import { MongoClient } from "mongodb";

export interface Image {
	url: string;
}

export default async function GetImages() {
	const connectionString =
		"mongodb+srv://root:JgwHiDp2fbs6UD8x@cluster0.qtyqko0.mongodb.net/?retryWrites=true&w=majority";

	const client = new MongoClient(connectionString);

	try {
		console.log("Connecting");
		await client.connect();

		const db = client.db("teraz");

		console.log("fetching");
		const items = await db.collection("images").find({}).toArray();

		console.log("returning");
		const images: Image[] = items.map((x) => {
			return { url: x.url };
		});

		return images;
	} finally {
		await client.close();
	}
}
