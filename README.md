# Spinnaker Helm Chart

## Install Spinnaker on your kubernetes cluster with one command.

Clouddriver auto-configured to deploy to the same cluster.

Ensure `kubectl` is pointed at your cluster
```
kubectl cluster-info
```

Initialize `helm` on your cluster
```
helm init
```

Clone repo and install Spinnaker in it's own namespace
```
git clone https://github.com/moondev/spinnaker-helm.git; cd spinnaker-helm

helm install --namespace spinnaker --name spinnaker ./spinnaker-chart
```

Wait until all pods are up
```
kubectl get pods --namespace spinnaker
```

Forward port 9000 to deck pod.
```
kubectl --namespace spinnaker port-forward (kubectl --namespace spinnaker get pods -l app=deck -o jsonpath='{.items[*].metadata.name}') 9000:9000
```

Spinnaker is now available for use at `http://localhost:9000`


To delete the release and remove all Spinnaker components

```
helm delete spinnaker --purge
```

Versions of Spinnaker components can be edited in `spinnaker-chart/values.yaml`