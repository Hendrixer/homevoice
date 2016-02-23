import React from 'react-native';

export default function coalesceNonElementChildren(children, coalesceNodes) {
  var coalescedChildren = [];

  var contiguousNonElements = [];
  React.Children.forEach(children, (child) => {
    if (!React.isValidElement(child)) {
      contiguousNonElements.push(child);
      return;
    }

    if (contiguousNonElements.length) {
      coalescedChildren.push(
        coalesceNodes(contiguousNonElements, coalescedChildren.length)
      );
      contiguousNonElements = [];
    }

    coalescedChildren.push(child);
  });

  if (contiguousNonElements.length) {
    coalescedChildren.push(
      coalesceNodes(contiguousNonElements, coalescedChildren.length)
    );
  }

  return coalescedChildren;
}
