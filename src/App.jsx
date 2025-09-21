import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container mx-auto">
        <div className="flex items-center justify-center h-dvh">
          <div className="w-1/3 mx-auto my-20 rounded-xl shadow-xl px-8 pt-10 pb-2 border">
            <h1 className="text-3xl text-center font-semibold text-blue-500">
              Welcome Back
            </h1>
            <div className="py-5">
              <div className="mb-4">
                <div className="my-2 text-sm">Email Address</div>
                <input
                  type="text"
                  className="px-2 py-2 border border-zinc-400 rounded w-full "
                  placeholder="Enter email address"
                />
              </div>

              <div className="mb-4">
                <div className="my-2 text-sm">Password</div>
                <input
                  type="password"
                  className="px-2 py-2 border border-zinc-400 rounded w-full "
                  placeholder="Enter password"
                />
              </div>

              <button className="bg-zinc-950 text-white py-3 w-full my-5 rounded-lg hover:bg-zinc-800 transition-all ease-in-out duration-300">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
