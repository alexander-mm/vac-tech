import { pumps } from '../constants';

const VacuumPumps = () => {

  return (
    <section id='pumps' className='bg-black w-full pt-10'>
      <div className='flex items-center justify-center py-10 font-toxic text-white text-2xl md:text-4xl'>
        <h1>VACUUM PUMPS</h1>
      </div>
      {pumps.map((item, index) => (
        <div key={index} className='flex flex-col md:flex-row justify-evenly items-center'>
          <img src={item.img} alt="Pump Image" className='w-72 md:w-96' />
          <img src={item.model} alt="Pump Model" className='w-36 md:w-52 pb-8 md:pb-0' />
          <div className=' pb-20'>
            <h1 className='font-toxic text-2xl text-white text-center py-6'>SPECS:</h1>
            <table className="table-auto text-white text-center px-4 font-toxic">
              <thead>
                <tr>
                  <th className="border-b border-r border-white text-xl px-4 py-2">FLOW (50kpa)</th>
                  <th className="border-b border-r border-white text-xl px-4 py-2">POWER</th>
                  <th className="border-b border-white text-xl px-4 py-2">R.P.M</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-b border-r border-white py-2">{item.flow1}</td>
                  <td className="border-b border-r border-white py-2">{item.power1}</td>
                  <td className="border-b border-white py-2">{item.rpm1}</td>
                </tr>
                <tr>
                  <td className="border-b border-r border-white py-2">{item.flow2}</td>
                  <td className="border-b border-r border-white py-2">{item.power2}</td>
                  <td className="border-b border-white py-2">{item.rpm2}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </section>
  );
}

export default VacuumPumps;