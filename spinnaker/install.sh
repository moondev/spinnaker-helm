./rollout.sh redis
./rollout.sh front50
./rollout.sh clouddriver
./rollout.sh orca
./rollout.sh gate
./rollout.sh deck
./rollout.sh igor

#IP=`minikube ip`

#sed 's#MINIKUBE_IP#'$IP'#' ingress.yml | kubectl apply -f -