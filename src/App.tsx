import "./App.css";

function App() {

  return (
    <>
      <main class="w-screen flex items-center justify-center min-h-screen overflow-hidde touch-none">
        <div class="w-screen h-screen bg-gradient-to-r from-[#D5DEE7] via-[#E8EBF2] to-[#E2E7ED]">
          <div class="flex items-center justify-center h-full p-2">
            <div class="flex flex-col justify-between flex-1 w-full h-full p-3 border-1 border-gray-300 rounded-xl max-w-[1200px]">
              <div class="bg-black h-full rounded-xl relative overflow-hidden p-4">
                <div class="relative overflow-hidden h-full">
                  <div class="absolute right-0 top-0 h-full w-3/5 bg-white/70 backdrop-blur-sm"></div>
                  <img
                    class="object-cover"
                    src="https://images.unsplash.com/photo-1490772888775-55fceea286b8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Vite logo"
                  />
                </div>
              </div>
              <div class="flex-1 pt-4 px-4 font-black text-gray-400">KK</div>
            </div>
            <div class="h-full p-4 min-w-48 space-y-4 relative">
              <div class="absolute w-12 h-28 bg-amber-500 rounded-full top-2 right-2"></div>
              <div class="flex flex-col">
                <div class="w-22 h-10 bg-black rounded-full"></div>
              </div>
              <div class="relative p-2.5 w-fit">
                <div class="absolute flex justify-center items-start top-0 left-1/2 -translate-x-1/2">
                  <div class="h-1 w-1 bg-black rounded-full"></div>
                </div>
                <div class="absolute flex justify-center items-start bottom-0 left-1/2 -translate-x-1/2">
                  <div class="h-1 w-1 bg-black rounded-full"></div>
                </div>
                <div class="absolute flex justify-center items-start left-0 top-1/2 -translate-y-1/2">
                  <div class="h-1 w-1 bg-black rounded-full"></div>
                </div>
                <div class="absolute flex justify-center items-start right-0 top-1/2 -translate-y-1/2">
                  <div class="h-1 w-1 bg-black rounded-full"></div>
                </div>

                <div class="w-25 h-25 bg-black rounded-full relative"></div>
              </div>
              <div class="flex justify-start items-center gap-3">
                <div class="w-14 h-14 bg-black rounded-full"></div>
                <div class="w-22 h-14 bg-black rounded-full"></div>
              </div>
              <div class="flex justify-start items-center gap-5">
                <div class="w-14 h-14 bg-black rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
