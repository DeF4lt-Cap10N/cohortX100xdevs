const Signup = () => {
  return (
    <div className="m-5 flex gap-4 ">
      <input
        className="border-1 pl-2 p-3 outline-0 rounded-full"
        type="text"
        placeholder="email"
      />
      <input
        className="border-1 pl-2 p-3 outline-0 rounded-full"
        type="text"
        placeholder="password"
      />
      <button>Signup</button>
    </div>
  )
}

export default Signup