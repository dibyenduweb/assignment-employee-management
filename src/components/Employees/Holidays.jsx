import Home from "../Home/Home";


const Holidays = () => {
    return(
        <>
        <Home/>
        <div className="bg-gray-100 p-8 rounded-lg shadow-md px-72">
      <h2 className="text-2xl font-bold mb-4">Holiday List 2024</h2>
      <ul className="list-disc ml-6">
        <li className="mb-2">{`January 1 - New Year's Day`}</li>
        <li className="mb-2">January 15 - Martin Luther King Jr. Day</li>
        <li className="mb-2">February 14 - Valentine's Day</li>
        <li className="mb-2">March 17 - St. Patrick's Day</li>
        <li className="mb-2">April 1 - April Fools' Day</li>
        <li className="mb-2">May 5 - Cinco de Mayo</li>
        <li className="mb-2">May 27 - Memorial Day</li>
        <li className="mb-2">July 4 - Independence Day (USA)</li>
        <li className="mb-2">September 2 - Labor Day</li>
        <li className="mb-2">October 14 - Columbus Day</li>
        <li className="mb-2">October 31 - Halloween</li>
        <li className="mb-2">November 11 - Veterans Day</li>
        <li className="mb-2">November 28 - Thanksgiving Day</li>
        <li className="mb-2">December 25 - Christmas Day</li>
        <li className="mb-2">December 31 - New Year's Eve</li>
      </ul>
    </div>
        </>
    )}
export default Holidays;