import React from "react";
import { useState } from "react";

export default function ReactCard() {
    const [likes, setLikes] = useState(0)
    // practice
    // const [downloads, setDownlods] = useState(0)
    // const [dislikes, setDisolikes] = useState(0)

    const addLike = () => {
        setLikes(likes + 1)
    }

    const removeLike = () => {
        setLikes(likes - 1)
    }


  return (
    <>
      <div className="max-w-sm rounded overflow-hidden bg-mauve-100 shadow-md shadow-dirtyOrange-700 mt-5">
        <img src="../paint.webp" alt="" />
        <div className="px-6 py-4">
          <div className="font-bold text-mauve-600 text-xl mb-2">
            Photo By <a href="https://unsplash.com/@eugene_golovesov" className="font-bold text-mauve-800">Eugene Golovesov</a>
          </div>

          <ul className="text-mauve-500 text-right">
            <li>
              <strong>Likes: </strong>
              <button onClick={addLike} className="text-mauve-100">{likes}</button>
            </li>
            <li>
              <strong>Views: </strong>
              14
            </li>
            <li>
              <strong>Downloads: </strong>2
            </li>
          </ul>
        </div>

        <div className="px-6 py-4">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-mauve-700 mr-2">
            #tag1
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-mauve-700 mr-2">
            #tag2
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-mauve-700 mr-2">
            #tag3
          </span>
        </div>
      </div>
    </>
  );
}
