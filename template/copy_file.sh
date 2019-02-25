#/usr/bin/expect
set sourceDir [lindex $argv 0]
set targetDir [lindex $argv 1]
set folder [exec sh -c {echo $sourceDir | sed 's/^.*\/\([^\/]+\)\/?$/\1/g'}]

#spawn sftp -i ~/.ssh/id_rsa ServerAliveInterval=30 -P 7122 root,10.16.182.15,22,xuchao01@jumpbox.qiyi.domain
spawn sftp -i ~/.ssh/id_rsa -P 7122 root,10.13.48.91,22,xuchao01@jumpbox.qiyi.domain

expect {
  "(yes/no)?" {send "yes\r"; expect_continue}
}
set timeout -1
expect "sftp>"
 send "cd $targetDir\r";
expect "sftp>"
 send "mkdir $folder\r";
expect "sftp>"
 send "put -r $sourceDir $targetDir\r"
expect {
  "Multiple paths match, but" {
     send "put $sourceDir $targetDir\r";
  }
}
expect "sftp>"
send "bye\r"
expect eof
