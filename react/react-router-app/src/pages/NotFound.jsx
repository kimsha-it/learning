import React from 'react'
import { Link } from 'react-router-dom'
import PATHS from "./../constants/paths.js";

export default function NotFound() {
  return (
    <div>페이지를 찾을 수 없습니다. 404 error
      <Link className="border-2 p-2" to={PATHS.ROOT.INDEX}>홈페이지로 돌아가기</Link>
    </div>
  )
}
