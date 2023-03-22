import { useRouter } from 'next/router';

const SuccessPaymentPage = () => {
  const { query } = useRouter();

  return (
    <div>
      <div>SuccessPaymentPage</div>
      <div>Transaction id: {query.session_id}</div>
    </div>
  );
};

export default SuccessPaymentPage;
