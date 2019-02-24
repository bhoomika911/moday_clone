//*********************  amazon credentials ******************//
  dev@codematrix.org / CodeMatrix@431
//*********************  amazon credentials ******************//


//*********************  amazon  s3 detail ******************//
Bucket Name:- poc-test.com
URL: d1klenma7r1x8r.cloudfront.net


Users with AWS Management Console access can sign-in at:
https://282031287020.signin.aws.amazon.com/console
//*********************  amazon  s3 detail******************//

//*********************  amazon ec2 detail******************//

Public dns : ec2-3-90-113-132.compute-1.amazonaws.com


chmod 400 new_monday_clone.pem

Command to connect via ssh :

ssh -i "new_monday_clone.pem" ubuntu@ec2-3-90-113-132.compute-1.amazonaws.com



To get running process list

 ps -ef


to killl process

sudo kill -9 12195(this is pid)
//*********************  amazon ec2 detail******************//












server {
   listen 80 default_server;
   root /var/www/moday_clone/build;
   server_name http://ec2-3-90-113-132.compute-1.amazonaws.com/;
   index index.html index.htm;
   location / {
   }
}
