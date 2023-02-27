import SendEmailWhenProductIsCreatedHandler from "../Product/Handler/send-email-when-product-is-created-handler";
import EventDispatcher from "./event-dispatcher";

describe("Domain events tests", () => {
    it("Should register an event", () => {
        const eventDispatcher = new EventDispatcher();
        const eventHandler = new SendEmailWhenProductIsCreatedHandler();

        eventDispatcher.register("ProductCreatedEvent", eventHandler);

        expect(
            eventDispatcher.getEventHandlers["ProductCreatedEvent"]
        ).toBeDefined();
        expect(eventDispatcher.getEventHandlers["ProductCreatedEvent"].length).toBe(1);
    });
});