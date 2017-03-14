sudo virsh net-start default

minikube delete

rm -rf ~/.minikube

minikube start --vm-driver kvm --memory 8000 --cpus 4 --disk-size 40g




helm install ./chart