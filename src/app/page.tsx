import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="bg-white min-h-screen text-gray-800">
      <Navbar />

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-36 bg-gradient-to-br from-blue-50 to-blue-100">
        <h1 className="text-5xl font-bold max-w-2xl leading-tight mb-3">
          <span className="text-red-600">APP</span>INTOUCH
        </h1>
        <h2 className="text-3xl font-bold max-w-2xl leading-tight mb-6">
          COMPANY, LIMITED
        </h2>
        <p className="text-lg text-gray-600 max-w-xl mb-8">
          App Intouch Co., Ltd. was established By a group of system development and marketing.
          We develop and deliver enterprise customized software for my clients in a wide range of
          business scale from medium-sized firms to large organization
        </p>
        <div className="flex gap-4">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-xl text-lg hover:bg-blue-700 transition">
            In Touch!
          </button>
          <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-xl text-lg hover:bg-blue-50 transition">
            Features
          </button>
        </div>
        <img
          src="/mockup.png"
          alt="App mockup"
          className="mt-12 w-full max-w-md rounded-xl shadow-lg"
        />
      </section>
    </main>
  );
}
