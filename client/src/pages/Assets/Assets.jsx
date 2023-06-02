import { useEffect, useState } from "react"
import AssetRow from "../../components/Assets/AssetRow/AssetRow"
import axios from "axios"
import AssetModal from "../../components/Assets/AssetModal/AssetModal"
import { useNavigate } from "react-router-dom"

const Assets = () => {
  const [listOfAssets, setListOfAssets] = useState([])
  const [asset, setAsset] = useState()
  const navigate = useNavigate()
  const [search, setSearch] = useState("")

  const categories = [
    { key: "All" },
    { key: "Equipments" },
    { key: "Furnitures" },
    { key: "Emergency Equipments" },
    { key: "Event Equipments" },
    { key: "Event Furnitures" },
    { key: "Vehicles" },
  ]

  
  const fetchAssets = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/v1/asset")
      setListOfAssets(res.data)
    } catch (error) {
      console.log(error.response.data)
    }
  }

  useEffect(() => {
    fetchAssets()
  }, [])

  return (
    <div className="overflow-x-auto w-full px-5">
      <div>
        <h2 className="text-xl font-medium leading-tight">Assets</h2>
      </div>
      <div className="my-2 flex sm:flex-row flex-col">
        <div className="flex flex-row mb-1 sm:mb-0">
          <div className="relative">
            <select className="h-full rounded-l border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
              <option>5</option>
              <option>10</option>
              <option>20</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
          <div className="relative">
            <select
              className="h-full rounded-r border-t sm:rounded-r-none sm:border-r-0 border-r border-b block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500"
              onChange={(e) => setSearch(e.target.value)}
            >
              {categories.map((category, index) => (
                <option key={index} value={category.key}>
                  {category.key}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="block relative">
          <span className="h-full absolute inset-y-0 left-0 flex items-center pl-2">
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4 fill-current text-gray-500"
            >
              <path d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z"></path>
            </svg>
          </span>
          <input
            placeholder="Search"
            className="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="block relative ms-auto my-auto">
          <button
            className="btn btn-sm  bg-orange-500 border-none hover:bg-orange-600"
            onClick={() => navigate("/dashboard/add_asset")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </button>
        </div>
      </div>
      <table className="table w-full">
        {/* <!-- head --> */}
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Name</th>
            <th>Condition</th>
            <th>Date Acquired</th>
            <th>Lifespan</th>
            <th>Category</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {listOfAssets
            .filter((asset) => {
              return search.toLowerCase() === "" || search === "All"
                ? asset 
                : asset.name.toLowerCase().includes(search) || asset.category.includes(search) 
            })
            .map((asset) => (
              <AssetRow asset={asset} key={asset.id} setAsset={setAsset} />
            ))}
        </tbody>
        {listOfAssets.length >= 5 && (
          <tfoot>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Condition</th>
              <th>Date Acquired</th>
              <th>Lifespan</th>
              <th>Category</th>
              <th></th>
            </tr>
          </tfoot>
        )}
      </table>
      <AssetModal
        listOfAssets={listOfAssets}
        setListOfAssets={setListOfAssets}
        asset={asset}
      />
    </div>
  )
}

export default Assets
