npm run build
aws s3 cp dist s3://catppingmall --recursive --acl public-read