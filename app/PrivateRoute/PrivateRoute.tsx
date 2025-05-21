// "use client";

// import { useRouter } from 'next/navigation';
// import { useEffect, useState } from 'react';

// interface Props {
//   children: React.ReactNode;
// }

// const PrivateRoute = ({ children }: Props) => {
//   const router = useRouter();
//   const [loading, setLoading] = useState(true);
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (!token) {
//       router.push("/login");
//     } else {
//       setIsAuthenticated(true);
//     }
//     setLoading(false); // Set loading to false *after* token check
//   }, [router]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (!isAuthenticated) {
//     return null; // Or a spinner if you want
//   }

//   return <>{children}</>;
// };

// export default PrivateRoute;
