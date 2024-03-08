import env_config from "../configs/env_config";
import DFnewLogger from './DFnewlogger';

const GenS3Link = (path) => {
  try {
    return `https://${env_config.aws.s3Bucket}.s3.${env_config.aws.region}.amazonaws.com/${path}`;
  } catch (e) {
    DFnewLogger(e?.message);
    return 'https://via.placeholder.com/518';
  }
}

export default GenS3Link;