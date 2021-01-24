import React from "react";
import { useParams } from "react-router-dom";

export default function Page() {
	const params = useParams();
	const { name } = params;

	return (
		<div className="flex flex-col items-center pt-24 space-y-2">
			<p className="text-xl font-mono text-gray-600">Hi! {name}</p>
		</div>
	);
}
