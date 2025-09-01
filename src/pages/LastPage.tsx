import hills from "../assets/hills.svg";
export default function LastPage() {
  return (
    <div className="min-h-screen w-screen bg-gradient-to-b from-[#806B99] to-[#D6C0FC] relative flex items-end">
      <img 
        src={hills} 
        alt="hills" 
        className="w-full h-auto bottom-0 left-0"
      />
    </div>
  );
}
