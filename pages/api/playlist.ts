import prisma from '../../lib/prisma';
import { validateRoute } from '../../lib/auth';

export default validateRoute(async (req, res, user) => {
  // const playlists = await prisma.playlist.findMany({
  //   where: {
  //     userId: user.id,
  //   },

  //   orderBy: {
  //     name: 'asc',
  //   },
  // });

  const playlists = await prisma.$queryRaw`
  select * from "Playlist"
  order by LENGTH(name), name
  `;

  res.json(playlists);
});
