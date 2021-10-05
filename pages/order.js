import OrderForm from '../components/OrderForm';

export default function Order() {
  return (
    <>
      <div className="h-screen w-screen bg-black">
        <div className="absolute h-3/4 w-2/5 my-24 right-12">
          <OrderForm />
        </div>
      </div>
    </>
  );
}
