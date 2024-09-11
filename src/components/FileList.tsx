"use client";

import React, { FC } from "react";

import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

const tags = Array.from({ length: 50 }).map(
	(_, i, a) => `v1.2.0-beta.${a.length - i}`
);

interface FileListProps {}

const FileList: FC<FileListProps> = ({}) => {
	return (
		<Table>
			<TableHeader>
				<TableRow>
					<TableHead className="w-full text-neutral-800">
						Uploaded Files
					</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{tags.map((tag, index) => (
					<TableRow key={index}>
						<TableCell className="font-medium">{tag}</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
};

export default FileList;
