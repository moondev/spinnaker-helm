# Spinnaker Helm Chart

## Install Spinnaker on your kubernetes cluster with one command.

Ensure `kubectl` is pointed at your cluster
```
kubectl cluster-info
```

Initialize [`helm`] on your cluster(https://github.com/kubernetes/helm/blob/master/docs/install.md)
```
helm init
```

Install Spinnaker in it's own namespace
```
helm install --namespace spinnaker --name spinnaker ./spinnaker-chart
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


To delete the release and remove all Spinnaker components

```
helm delete spinnaker --purge
```

Versions of Spinnaker components can be edited in `spinnaker-chart/values.yaml`