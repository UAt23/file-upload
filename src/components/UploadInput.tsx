import React, { FC } from "react";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface UploadInputProps {}

const UploadInput: FC<UploadInputProps> = ({}) => {
	return (
		<div className="grid w-full max-w-sm items-center gap-1.5">
			<Label htmlFor="file">Upload File</Label>
			<Input id="file" type="file" />
		</div>
	);
};

export default UploadInput;
