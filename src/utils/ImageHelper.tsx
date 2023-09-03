"use server";

import { MongoClient } from "mongodb";
import { zact } from "zact/server";

export interface Image {
	url: string;
}

export const GetImages = zact()(async () => {
	const connectionString =
		"mongodb+srv://root:JgwHiDp2fbs6UD8x@cluster0.qtyqko0.mongodb.net/?retryWrites=true&w=majority";

	const client = new MongoClient(connectionString);

	try {
		await client.connect();

		const db = client.db("teraz");

		const items = await db.collection("images").find({}).toArray();

		const images: Image[] = items.map((x) => {
			return { url: x.url };
		});

		return { images: images };
	} catch {
		return {
			images: [{ url: "/images/imageTest.jpg" }],
		};
	} finally {
		await client.close(true);
	}
});
