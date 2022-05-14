import { IItemType } from 'types';

export default function Item({ item }: { item: IItemType }) {
  const { club, price, createdAt } = item;
  const click = () => {
    window.open('/');
  };
  return (
    <>
      <div className="item" key={club.id}>
        <img
          className="item__img"
          src={club.coverUrl}
          alt="coverUrl"
          onClick={click}
        />
        <div className="item__body">
          <div className="item__name">{club.name}</div>
          <div className="item__type">{club.type}</div>
          <div className="item__place">{club.place}</div>
          <div className="item__price">$ {price}</div>
          <div className="item__createdAt">{createdAt}</div>
        </div>
      </div>
    </>
  );
}
