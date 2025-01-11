import { applyAddEventListener } from '../addEventListenerUtilis';
import { applyMenuStyles } from './lib/autoRespon/utils/styleUtils';

jest.mock('./styleUtils', () => ({
    applyMenuStyles: jest.fn(),
}));

describe('applyAddEventListener', () => {
    let mockElement;

    beforeEach(() => {
        // Create a mock element with addEventListener
        mockElement = {
            classOfElement: { current: document.createElement('div') },
        };
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('adds event listeners to the element', () => {
        const typeOfListener = {
            click: { color: 'red' },
            mouseover: { color: 'blue' },
        };

        applyAddEventListener(mockElement, typeOfListener);

        // Mock `addEventListener` spy
        const addEventListenerSpy = jest.spyOn(mockElement.classOfElement.current, 'addEventListener');

        // Verify listeners are added
        expect(addEventListenerSpy).toHaveBeenCalledWith('click', expect.any(Function));
        expect(addEventListenerSpy).toHaveBeenCalledWith('mouseover', expect.any(Function));
    });

    test('executes callback and applies styles on event trigger', () => {
        const typeOfListener = {
            click: { color: 'red' },
        };

        applyAddEventListener(mockElement, typeOfListener);

        // Trigger the click event
        const event = new Event('click');
        mockElement.classOfElement.current.dispatchEvent(event);

        // Verify that `applyMenuStyles` was called with the correct arguments
        expect(applyMenuStyles).toHaveBeenCalledWith(mockElement, { color: 'red' });
    });

    test('does nothing if classOfElement or current is null', () => {
        const invalidElement = { classOfElement: { current: null } };
        const typeOfListener = { click: { color: 'red' } };

        applyAddEventListener(invalidElement, typeOfListener);

        // Verify that no listeners are added
        expect(applyMenuStyles).not.toHaveBeenCalled();
    });

    test('handles multiple event types correctly', () => {
        const typeOfListener = {
            click: { color: 'green' },
            mouseover: { backgroundColor: 'yellow' },
        };

        applyAddEventListener(mockElement, typeOfListener);

        // Trigger the click event
        const clickEvent = new Event('click');
        mockElement.classOfElement.current.dispatchEvent(clickEvent);
        expect(applyMenuStyles).toHaveBeenCalledWith(mockElement, { color: 'green' });

        // Trigger the mouseover event
        const mouseoverEvent = new Event('mouseover');
        mockElement.classOfElement.current.dispatchEvent(mouseoverEvent);
        expect(applyMenuStyles).toHaveBeenCalledWith(mockElement, { backgroundColor: 'yellow' });
    });
});
