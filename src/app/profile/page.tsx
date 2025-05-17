// // app/profile/page.tsx
// import { UserProfile } from "@clerk/nextjs";
// import Layout from "@/components/Layout";

// export default function ProfilePage() {
//   return (
//     <Layout enforceAuth={true}>
//       <div className="max-w-4xl mx-auto py-12 px-4">
//         <h1 className="text-2xl font-serif font-bold mb-8 text-center">My Profile</h1>
//         <div className="bg-white rounded-lg shadow-md p-6">
//           <UserProfile 
//             appearance={{
//               elements: {
//                 rootBox: "mx-auto",
//                 card: "shadow-none",
//               }
//             }}
//           />
//         </div>
//       </div>
//     </Layout>
//   );
// }