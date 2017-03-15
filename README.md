# Spinnaker Helm Chart

## Install Spinnaker on your kubernetes cluster with one command.

Ensure kubectl is pointed at your cluster and helm is installed. You may need to `helm init` if you have not done so yet.

Create a namespace for spinnaker
```
kubectl create namespace spinnaker
```

Install Spinnaker
```
helm install --namespace spinnaker ./spinnaker-chart
```

Wait until all pods are up
```
kubectl get pods --namespace spinnaker
```

Forward port 9000 to deck pod.
```
kubectl port-forward (kubectl get pods -l app=deck -o jsonpath='{.items[*].metadata.name}') 9000:9000
```

Spinnaker is now available for use at `http://localhost:9000`