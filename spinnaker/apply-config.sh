kubectl apply -f namespace.yml
sleep 2
kubectl delete --namespace spinnaker configmap spinnaker-config
sleep 2
kubectl create --namespace spinnaker configmap spinnaker-config --from-file=config/front50.yml --from-file=config/clouddriver.yml --from-file=config/orca.yml  --from-file=config/gate.yml  --from-file=config/settings.js  --from-file=config/run-apache2.sh --from-file=config/kube.config --from-file=config/igor.yml --from-file=config/echo.yml

sleep 2
kubectl delete --namespace spinnaker secret spinnaker-config
sleep 2
kubectl create --namespace spinnaker secret generic spinnaker-config --from-file=config/front50.yml --from-file=config/clouddriver.yml --from-file=config/orca.yml  --from-file=config/gate.yml  --from-file=config/settings.js  --from-file=config/run-apache2.sh --from-file=config/kube.config --from-file=config/igor.yml --from-file=config/echo.yml