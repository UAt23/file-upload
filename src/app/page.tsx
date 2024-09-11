import FileList from "../components/FileList";
import UploadInput from "../components/UploadInput";

export default function Home() {
  return (
    <div className="h-screen flex">
			{/* LEFT */}
			<div className="flex flex-col gap-4 w-[14%] md:w-[8%] lg:w-[16%] xl:w-[20%] p-4">
				<UploadInput />
				<FileList />
			</div>
			{/* RIGHT */}
			<div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[80%] bg-[#f5f5f7] overflow-auto flex flex-col">
				asd
			</div>
		</div>
  );
}
