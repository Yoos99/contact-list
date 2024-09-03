import '../../css/searchList.css';

export default function SearchList() {
  return (
    <div className="searchList">
      <input type="text" placeholder="검색어를 입력 후 엔터를 누르세요." />
      <button onClick="">전체리스트 보기</button>
    </div>
  );
}
