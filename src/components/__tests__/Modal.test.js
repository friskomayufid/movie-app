import { render } from '@testing-library/react';
import Modal from '../Modal';

test('display modal poster', async () => {
  const modal = render(
    <Modal poster={'1.jpg'} show={true} handleClose={() => {}} />
  );

  const poster = await modal.findByTestId('poster');
  expect(poster.src).toContain('1.jpg');
});

test('show modal poster', async () => {
  const modal = render(
    <Modal poster={'1.jpg'} show={true} handleClose={() => {}} />
  );

  const modalContainer = await modal.findByTestId('modal');
  expect(modalContainer).toHaveClass('display-block');
});

test('hide modal poster', async () => {
  const modal = render(
    <Modal poster={'1.jpg'} show={false} handleClose={() => {}} />
  );

  const modalContainer = await modal.findByTestId('modal');
  expect(modalContainer).toHaveClass('display-none');
});
