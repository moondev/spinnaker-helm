./apply-config.sh
kubectl --namespace spinnaker delete -f $1.yml

kubectl --namespace spinnaker apply -f $1.yml
kubectl --namespace spinnaker rollout status deployment/$1


IP=`minikube ip`

#sed 's#MINIKUBE_IP#'$IP'#' ingress.yml | kubectl apply -f -