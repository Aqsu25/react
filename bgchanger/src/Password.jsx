import { useState, useCallback, useEffect, useRef } from "react";

export default function Password({ generator }) {
  const [length, setLength] = useState(8);
  const [allowedNumber, setnumber] = useState(false);
  const [allowedCharacter, setcharacter] = useState(false);
  const [password, setPassword] = useState("");
  // useRef
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (allowedNumber) str += "0123456789"
    if (allowedCharacter) str += "~!@#$%^&*()_+:><=?"
    for (let index = 1; index <= length; index++) {

      let char = Math.floor(Math.random() * str.length)
      pass += str.charAt(char)
    }
    setPassword(pass)
  }

    , [length, allowedCharacter, allowedNumber, setPassword])

  const copypasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])
  useEffect(() => {
    passwordGenerator()
  }, [length, allowedCharacter, allowedNumber, passwordGenerator])

  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                    w-96 bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl
                    text-white px-8 py-10 shadow-2xl flex flex-col items-center">

      <h1 className="text-sm font-extrabold mb-8 text-center tracking-wide">{generator}</h1>

      <div className="flex w-full mb-6 shadow-lg rounded-xl overflow-hidden">
        <input
          type="text"
          value={password}
          className="flex-1 py-3 px-4 outline-none bg-white text-black rounded-l-xl text-sm font-medium"
          placeholder="Password"
          readOnly
          ref={passwordRef}
        />
        <button onClick={copypasswordToClipboard} className="bg-blue-500 hover:bg-blue-600 transition-colors text-white px-5 py-3 rounded-r-xl font-semibold hover:scale-105">
          Copy
        </button>
      </div>

      <div className="flex flex-col w-full gap-5 mb-6">

        <div className="flex justify-between items-center gap-4">
          <input
            type="range"
            min="6"
            max="20"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}  // update state
            className="w-full h-2 rounded-lg accent-blue-500 cursor-pointer"
          />
          <span className="text-sm font-medium">{length}</span>
        </div>

        <div className="flex items-center gap-3">
          <input type="checkbox" id="numbers" className="accent-blue-500 w-5 h-5 cursor-pointer rounded" defaultChecked={allowedNumber} onClick={() => {
            setnumber((prev) => !prev);
          }} />
          <label htmlFor="numbers" className="text-sm font-medium select-none cursor-pointer">
            Include Numbers
          </label>
        </div>

        <div className="flex items-center gap-3">
          <input type="checkbox" className="accent-blue-500 w-5 h-5 cursor-pointer rounded" id="characters" defaultChecked={allowedCharacter}
            onClick={() => {
              setcharacter((prev) => !prev);
            }}
          />
          <label className="text-sm font-medium select-none" htmlFor="characters">Include Characters</label>
        </div>
      </div>


      <p className="text-center text-gray-300 text-sm">
        Generate strong and secure passwords instantly!
      </p>
    </div>


  )
}
