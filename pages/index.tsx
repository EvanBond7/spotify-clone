import GradientLayout from '../components/gradientLayout';
import prisma from '../lib/prisma';
function Home() {
  return (
    <GradientLayout
      color='green'
      subtitle='profile'
      title='Evan Bond'
      description='7 public playlists'
      image
    >
      <div>home page</div>
    </GradientLayout>
  );
}
// export const getServerSideProps = async () => {
//   const artists = await prisma.artist.findMany({});

//   return {
//     props: { artists },
//   };
// };

export default Home;
