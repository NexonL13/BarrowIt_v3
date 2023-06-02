import { RiDeleteBin6Line, RiEdit2Line } from "react-icons/ri"
import { useNavigate } from "react-router-dom"

const AssetRow = ({ asset, setAsset }) => {
  const navigate = useNavigate()
  return (
    <tr>
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img
                src={`/src/images/${asset?.image}`}
                alt="asset"
              />
            </div>
          </div>
          <div>
            <div className="font-bold">{asset?.name}</div>
            <div className="text-sm opacity-50">{asset?.brand}</div>
          </div>
        </div>
      </td>
      <td>
        {asset?.condition}
        <br />
      </td>
      <td>{asset?.acquired_date}</td>
      <td>{asset?.lifespan}</td>
      <td>
        <span className="badge badge-ghost badge-sm">{asset?.category}</span>
      </td>
      <th>
        <button
          className="btn btn-ghost btn-xs"
          onClick={() => navigate(`/dashboard/update_asset/${asset?.id}`)}
        >
          <div className="text-2xl text-blue-700">
            <RiEdit2Line />
          </div>
        </button>
        <label
          htmlFor="asset-modal"
          className="btn btn-ghost btn-xs "
          onClick={() => setAsset(asset)}
        >
          <div className="text-2xl text-red-700">
            <RiDeleteBin6Line />
          </div>
        </label>
      </th>
    </tr>
  )
}

export default AssetRow
