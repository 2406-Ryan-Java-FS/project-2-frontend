
set -e

echo "AWS_EC2_IP=$AWS_EC2_IP"

echo "Shell script: Compiling frontend"
npx react-scripts build

echo "Shell script: Uploading build folder files to ec2 for nginx to pick serve"
sftp -i ~/project22.pem ec2-user@$AWS_EC2_IP:/usr/share/nginx/html/ << 'END'
    put -r build/*
END