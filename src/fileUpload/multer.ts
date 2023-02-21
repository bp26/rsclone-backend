import Multer from 'multer';

const multer = Multer({ storage: Multer.diskStorage({}) });
export default multer;
