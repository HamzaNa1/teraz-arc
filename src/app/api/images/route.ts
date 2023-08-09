import { MongoClient } from "mongodb";
import { GetImagesResponse, Image } from "@/types/Images";

export async function GET(request: Request) {
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

		return new Response(
			JSON.stringify({ images: images } satisfies GetImagesResponse)
		);
	} catch {
		return new Response(
			JSON.stringify({
				images: [{ url: "/images/bad9454e-a349-441c-848f-486d21eed8ca.jpg" }],
			} satisfies GetImagesResponse)
		);
	} finally {
		await client.close(true);
	}
}
