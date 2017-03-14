#!/bin/sh

if [ "$1" = "" ]; then
  echo "Usage: ksh <pod> [flags_to_kubectl]"
  exit 1
fi
POD=$1
shift

COLUMNS=`tput cols`
LINES=`tput lines`
TERM=xterm
KUBE_SHELL=${KUBE_SHELL:-bash}
kubectl exec -i -t $POD "$@" -- env COLUMNS=$COLUMNS LINES=$LINES TERM=$TERM "$KUBE_SHELL"