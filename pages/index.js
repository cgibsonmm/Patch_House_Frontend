const styles = {
  bg: {
    background: `url(${require("./../images/bg.jpg")}) no-repeat`,
    backgroundPosition: "center",
    backgroundSize: "cover",
  },
  patch: {
    background: `url(${require("./../images/patch.jpg")}) no-repeat center center`,
    backgroundSize: "cover",
  },
};

export default function Home() {
  return (
    <div style={styles.bg} className="justify-center bg-gray-200 h-full">
      <div className="bg-gray-100 bg-opacity-25 my-5">
        <div className="md:w-1/2 text-gray-100 text-lg p-12 text-center rounded-lg bg-gray-900 bg-opacity-50">
          <strong className="text-2xl font-bold">Patch House</strong>, the
          database for Multi-Effects Patches!
        </div>
        <div className="flex flex-col">
          <div className="text-gray-100 bg-gray-800 bg-opacity-50 rounded flex h-24 px-4 mt-2 shadow-lg mx-2">
            <div style={styles.patch} className="w-1/3" />
            <div className="h-full flex-col justify-center align-center w-full">
              <h3 className="mt-4 text-lg font-bold">Patch of the Day</h3>
              <h5>Soul House!</h5>
            </div>
          </div>
          <div className="text-gray-100 bg-gray-800 bg-opacity-50 rounded flex h-24 px-4 mt-2 shadow-lg mx-2">
            <div style={styles.patch} className="w-1/3" />
            <div className="h-full flex-col justify-center align-center w-full">
              <h3 className="mt-4 text-lg font-bold">IR of the Week</h3>
              <h5>Soul House!</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
