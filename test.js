import test from 'ava';
import Yoga from '.';

test('yoga', t => {
	const config = Yoga.Config.create();

	const root = Yoga.Node.create(config);
	root.setWidth(100);
	root.setHeight(100);

	const firstChild = Yoga.Node.create(config);
	firstChild.setFlexGrow(1);
	firstChild.setFlexBasis(50);
	root.insertChild(firstChild, 0);

	const secondChild = Yoga.Node.create(config);
	secondChild.setFlexGrow(1);
	root.insertChild(secondChild, 1);
	root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

	t.is(root.getComputedLeft(), 0);
	t.is(root.getComputedTop(), 0);
	t.is(root.getComputedWidth(), 100);
	t.is(root.getComputedHeight(), 100);

	t.is(firstChild.getComputedLeft(), 0);
	t.is(firstChild.getComputedTop(), 0);
	t.is(firstChild.getComputedWidth(), 100);
	t.is(firstChild.getComputedHeight(), 75);

	t.is(secondChild.getComputedLeft(), 0);
	t.is(secondChild.getComputedTop(), 75);
	t.is(secondChild.getComputedWidth(), 100);
	t.is(secondChild.getComputedHeight(), 25);

	root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

	t.is(root.getComputedLeft(), 0);
	t.is(root.getComputedTop(), 0);
	t.is(root.getComputedWidth(), 100);
	t.is(root.getComputedHeight(), 100);

	t.is(firstChild.getComputedLeft(), 0);
	t.is(firstChild.getComputedTop(), 0);
	t.is(firstChild.getComputedWidth(), 100);
	t.is(firstChild.getComputedHeight(), 75);

	t.is(secondChild.getComputedLeft(), 0);
	t.is(secondChild.getComputedTop(), 75);
	t.is(secondChild.getComputedWidth(), 100);
	t.is(secondChild.getComputedHeight(), 25);
});
