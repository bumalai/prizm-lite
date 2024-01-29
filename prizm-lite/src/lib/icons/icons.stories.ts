import type { Meta, StoryObj } from '@storybook/html';

type Args = {
  label: string;
};

const meta: Meta<Args> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/configure/#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Icons',
};

export default meta;
type Story = StoryObj<Args>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
  render: (args) => {
    let area = document.createElement('div');

    area.innerHTML = `
<style>
      body {
        font-family: sans-serif;
        margin: 0;
        padding: 10px 20px;
        text-align: center;
      }
      .preview {
        width: 100px;
        display: inline-block;
        margin: 10px;
      }
      .preview .inner {
        display: inline-block;
        width: 100%;
        text-align: center;
        background: #f5f5f5;
        -webkit-border-radius: 3px 3px 0 0;
        -moz-border-radius: 3px 3px 0 0;
        border-radius: 3px 3px 0 0;
      }
      .preview .inner {
        line-height: 85px;
        font-size: 40px;
        color: #333;
      }
      .label {
        display: inline-block;
        width: 100%;
        box-sizing: border-box;
        padding: 5px;
        font-size: 10px;
        font-family: Monaco, monospace;
        color: #666;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        background: #ddd;
        -webkit-border-radius: 0 0 3px 3px;
        -moz-border-radius: 0 0 3px 3px;
        border-radius: 0 0 3px 3px;
        color: #666;
      }
    </style>
    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-charts-diagrams_bar-axis"></i>
      </span>
      <br />
      <span class="label">charts-diagrams_bar-axis</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-charts-diagrams_bar-basic"></i>
      </span>
      <br />
      <span class="label">charts-diagrams_bar-basic</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-charts-diagrams_bar-columns-axis-x"></i>
      </span>
      <br />
      <span class="label">charts-diagrams_bar-columns-axis-x</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-charts-diagrams_bar-columns"></i>
      </span>
      <br />
      <span class="label">charts-diagrams_bar-columns</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-charts-diagrams_bar-square"></i>
      </span>
      <br />
      <span class="label">charts-diagrams_bar-square</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-charts-diagrams_bar-stacked-axis"></i>
      </span>
      <br />
      <span class="label">charts-diagrams_bar-stacked-axis</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-charts-diagrams_bar-stacked"></i>
      </span>
      <br />
      <span class="label">charts-diagrams_bar-stacked</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-charts-diagrams_charts-histogram-chart-dashed"></i>
      </span>
      <br />
      <span class="label">charts-diagrams_charts-histogram-chart-dashed</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-charts-diagrams_column"></i>
      </span>
      <br />
      <span class="label">charts-diagrams_column</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-charts-diagrams_doughnut"></i>
      </span>
      <br />
      <span class="label">charts-diagrams_doughnut</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-charts-diagrams_gantt"></i>
      </span>
      <br />
      <span class="label">charts-diagrams_gantt</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-charts-diagrams_gauge"></i>
      </span>
      <br />
      <span class="label">charts-diagrams_gauge</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-charts-diagrams_hexagon-axis"></i>
      </span>
      <br />
      <span class="label">charts-diagrams_hexagon-axis</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-charts-diagrams_hexagon"></i>
      </span>
      <br />
      <span class="label">charts-diagrams_hexagon</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-charts-diagrams_histogram-axis"></i>
      </span>
      <br />
      <span class="label">charts-diagrams_histogram-axis</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-charts-diagrams_line-axis x"></i>
      </span>
      <br />
      <span class="label">charts-diagrams_line-axis x</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-charts-diagrams_line-axis-arrow-down"></i>
      </span>
      <br />
      <span class="label">charts-diagrams_line-axis-arrow-down</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-charts-diagrams_line-axis"></i>
      </span>
      <br />
      <span class="label">charts-diagrams_line-axis</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-charts-diagrams_line-down"></i>
      </span>
      <br />
      <span class="label">charts-diagrams_line-down</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-charts-diagrams_line-multiple-y-axis-x"></i>
      </span>
      <br />
      <span class="label">charts-diagrams_line-multiple-y-axis-x</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-charts-diagrams_line-multiple-y-axis"></i>
      </span>
      <br />
      <span class="label">charts-diagrams_line-multiple-y axis</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-charts-diagrams_line-up"></i>
      </span>
      <br />
      <span class="label">charts-diagrams_line-up</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-charts-diagrams_line"></i>
      </span>
      <br />
      <span class="label">charts-diagrams_line</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-charts-diagrams_pie-line-nested"></i>
      </span>
      <br />
      <span class="label">charts-diagrams_pie-line-nested</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-charts-diagrams_pie-line"></i>
      </span>
      <br />
      <span class="label">charts-diagrams_pie-line</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-charts-diagrams_pie-pentagon"></i>
      </span>
      <br />
      <span class="label">charts-diagrams_pie-pentagon</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-charts-diagrams_pie-several-parts"></i>
      </span>
      <br />
      <span class="label">charts-diagrams_pie-several-parts</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-charts-diagrams_pie-simple"></i>
      </span>
      <br />
      <span class="label">charts-diagrams_pie-simple</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-charts-diagrams_pie"></i>
      </span>
      <br />
      <span class="label">charts-diagrams_pie</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-charts-diagrams_range"></i>
      </span>
      <br />
      <span class="label">charts-diagrams_range</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-charts-diagrams_scatter-axis"></i>
      </span>
      <br />
      <span class="label">charts-diagrams_scatter-axis</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-charts-diagrams_scatter-basic"></i>
      </span>
      <br />
      <span class="label">charts-diagrams_scatter-basic</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-charts-diagrams_scatter"></i>
      </span>
      <br />
      <span class="label">charts-diagrams_scatter</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-communication-connection_at-sign"></i>
      </span>
      <br />
      <span class="label">communication-connection_at-sign</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-communication-connection_bluetooth"></i>
      </span>
      <br />
      <span class="label">communication-connection_bluetooth</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-communication-connection_bubble-message-add"></i>
      </span>
      <br />
      <span class="label">communication-connection_bubble-message-add</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-communication-connection_bubble-message-attention"></i>
      </span>
      <br />
      <span class="label">communication-connection_bubble-message-attention</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-communication-connection_bubble-message-circle"></i>
      </span>
      <br />
      <span class="label">communication-connection_bubble-message-circle</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-communication-connection_bubble-message-empty"></i>
      </span>
      <br />
      <span class="label">communication-connection_bubble-message-empty</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-communication-connection_bubble-message-off"></i>
      </span>
      <br />
      <span class="label">communication-connection_bubble-message-off</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-communication-connection_bubble-message-question"></i>
      </span>
      <br />
      <span class="label">communication-connection_bubble-message-question</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-communication-connection_bubble-message-text"></i>
      </span>
      <br />
      <span class="label">communication-connection_bubble-message-text</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-communication-connection_bubble-message"></i>
      </span>
      <br />
      <span class="label">communication-connection_bubble-message</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-communication-connection_headphones"></i>
      </span>
      <br />
      <span class="label">communication-connection_headphones</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-communication-connection_heart-empty"></i>
      </span>
      <br />
      <span class="label">communication-connection_heart-empty</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-communication-connection_heart-fill"></i>
      </span>
      <br />
      <span class="label">communication-connection_heart-fill</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-communication-connection_mail-open"></i>
      </span>
      <br />
      <span class="label">communication-connection_mail-open</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-communication-connection_mail"></i>
      </span>
      <br />
      <span class="label">communication-connection_mail</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-communication-connection_mailbox"></i>
      </span>
      <br />
      <span class="label">communication-connection_mailbox</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-communication-connection_messaging-telegram-send"></i>
      </span>
      <br />
      <span class="label">communication-connection_messaging-telegram-send</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-communication-connection_messaging-telegram"></i>
      </span>
      <br />
      <span class="label">communication-connection_messaging-telegram</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-communication-connection_phone-active-call"></i>
      </span>
      <br />
      <span class="label">communication-connection_phone-active-call</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-communication-connection_phone-cancelled"></i>
      </span>
      <br />
      <span class="label">communication-connection_phone-cancelled</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-communication-connection_phone-minus"></i>
      </span>
      <br />
      <span class="label">communication-connection_phone-minus</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-communication-connection_phone-off"></i>
      </span>
      <br />
      <span class="label">communication-connection_phone-off</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-communication-connection_phone-paused"></i>
      </span>
      <br />
      <span class="label">communication-connection_phone-paused</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-communication-connection_phone-plus"></i>
      </span>
      <br />
      <span class="label">communication-connection_phone-plus</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-communication-connection_phone"></i>
      </span>
      <br />
      <span class="label">communication-connection_phone</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-communication-connection_share-left"></i>
      </span>
      <br />
      <span class="label">communication-connection_share-left</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-communication-connection_share-right"></i>
      </span>
      <br />
      <span class="label">communication-connection_share-right</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-communication-connection_shareing"></i>
      </span>
      <br />
      <span class="label">communication-connection_shareing</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-communication-connection_signal-access-point"></i>
      </span>
      <br />
      <span class="label">communication-connection_signal-access-point</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-communication-connection_signal-off"></i>
      </span>
      <br />
      <span class="label">communication-connection_signal-off</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-communication-connection_signal-radio-tower"></i>
      </span>
      <br />
      <span class="label">communication-connection_signal-radio-tower</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-communication-connection_signal"></i>
      </span>
      <br />
      <span class="label">communication-connection_signal</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-communication-connection_star-empty"></i>
      </span>
      <br />
      <span class="label">communication-connection_star-empty</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-communication-connection_star-fill"></i>
      </span>
      <br />
      <span class="label">communication-connection_star-fill</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-communication-connection_star-half-fill"></i>
      </span>
      <br />
      <span class="label">communication-connection_star-half-fill</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-communication-connection_support-man"></i>
      </span>
      <br />
      <span class="label">communication-connection_support-man</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-communication-connection_thumb-down"></i>
      </span>
      <br />
      <span class="label">communication-connection_thumb-down</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-communication-connection_thumb-up"></i>
      </span>
      <br />
      <span class="label">communication-connection_thumb-up</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-communication-connection_wifi-off"></i>
      </span>
      <br />
      <span class="label">communication-connection_wifi-off</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-communication-connection_wifi"></i>
      </span>
      <br />
      <span class="label">communication-connection_wifi</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-data-network_database-chek"></i>
      </span>
      <br />
      <span class="label">data-network_database-chek</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-data-network_database-json"></i>
      </span>
      <br />
      <span class="label">data-network_database-json</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-data-network_database-magnifying glass"></i>
      </span>
      <br />
      <span class="label">data-network_database-magnifying glass</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-data-network_database-minus"></i>
      </span>
      <br />
      <span class="label">data-network_database-minus</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-data-network_database-plus"></i>
      </span>
      <br />
      <span class="label">data-network_database-plus</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-data-network_database-sql"></i>
      </span>
      <br />
      <span class="label">data-network_database-sql</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-data-network_database-xmark"></i>
      </span>
      <br />
      <span class="label">data-network_database-xmark</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-data-network_database"></i>
      </span>
      <br />
      <span class="label">data-network_database</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-data-network_ethernet"></i>
      </span>
      <br />
      <span class="label">data-network_ethernet</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-data-network_lan-connect"></i>
      </span>
      <br />
      <span class="label">data-network_lan-connect</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-data-network_lan-disconnect"></i>
      </span>
      <br />
      <span class="label">data-network_lan-disconnect</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-data-network_lan-pending"></i>
      </span>
      <br />
      <span class="label">data-network_lan-pending</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-data-network_network-1"></i>
      </span>
      <br />
      <span class="label">data-network_network-1</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-data-network_network-2"></i>
      </span>
      <br />
      <span class="label">data-network_network-2</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-data-network_network-3"></i>
      </span>
      <br />
      <span class="label">data-network_network-3</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-data-network_network-wired"></i>
      </span>
      <br />
      <span class="label">data-network_network-wired</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-data-network_server-close"></i>
      </span>
      <br />
      <span class="label">data-network_server-close</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-data-network_server-download"></i>
      </span>
      <br />
      <span class="label">data-network_server-download</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-data-network_server-minus"></i>
      </span>
      <br />
      <span class="label">data-network_server-minus</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-data-network_server-one"></i>
      </span>
      <br />
      <span class="label">data-network_server-one</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-data-network_server-plus"></i>
      </span>
      <br />
      <span class="label">data-network_server-plus</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-data-network_server-security"></i>
      </span>
      <br />
      <span class="label">data-network_server-security</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-data-network_server-shield"></i>
      </span>
      <br />
      <span class="label">data-network_server-shield</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-data-network_server-slash-up-line"></i>
      </span>
      <br />
      <span class="label">data-network_server-slash-up-line</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-data-network_server-slash"></i>
      </span>
      <br />
      <span class="label">data-network_server-slash</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-data-network_server-up-line"></i>
      </span>
      <br />
      <span class="label">data-network_server-up-line</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-data-network_server-upload"></i>
      </span>
      <br />
      <span class="label">data-network_server-upload</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-data-network_server"></i>
      </span>
      <br />
      <span class="label">data-network_server</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-date-time_alarm-clock"></i>
      </span>
      <br />
      <span class="label">date-time_alarm-clock</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-date-time_alarm-plus"></i>
      </span>
      <br />
      <span class="label">date-time_alarm-plus</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-date-time_calendar-blank"></i>
      </span>
      <br />
      <span class="label">date-time_calendar-blank</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-date-time_calendar-check"></i>
      </span>
      <br />
      <span class="label">date-time_calendar-check</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-date-time_calendar-clock"></i>
      </span>
      <br />
      <span class="label">date-time_calendar-clock</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-date-time_calendar-deleted"></i>
      </span>
      <br />
      <span class="label">date-time_calendar-deleted</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-date-time_calendar-event"></i>
      </span>
      <br />
      <span class="label">date-time_calendar-event</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-date-time_calendar-plus"></i>
      </span>
      <br />
      <span class="label">date-time_calendar-plus</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-date-time_calendar-question"></i>
      </span>
      <br />
      <span class="label">date-time_calendar-question</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-date-time_calendar-range"></i>
      </span>
      <br />
      <span class="label">date-time_calendar-range</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-date-time_calendar-today"></i>
      </span>
      <br />
      <span class="label">date-time_calendar-today</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-date-time_calendar"></i>
      </span>
      <br />
      <span class="label">date-time_calendar</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-date-time_clock-add"></i>
      </span>
      <br />
      <span class="label">date-time_clock-add</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-date-time_clock-arrow-down"></i>
      </span>
      <br />
      <span class="label">date-time_clock-arrow-down</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-date-time_clock-arrow-right"></i>
      </span>
      <br />
      <span class="label">date-time_clock-arrow-right</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-date-time_clock-arrow-up"></i>
      </span>
      <br />
      <span class="label">date-time_clock-arrow-up</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-date-time_clock-deleted"></i>
      </span>
      <br />
      <span class="label">date-time_clock-deleted</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-date-time_clock-exclamation"></i>
      </span>
      <br />
      <span class="label">date-time_clock-exclamation</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-date-time_clock-line-end"></i>
      </span>
      <br />
      <span class="label">date-time_clock-line-end</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-date-time_clock-rotate-left"></i>
      </span>
      <br />
      <span class="label">date-time_clock-rotate-left</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-date-time_clock-rotate-right"></i>
      </span>
      <br />
      <span class="label">date-time_clock-rotate-right</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-date-time_clock"></i>
      </span>
      <br />
      <span class="label">date-time_clock</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-date-time_letter-day"></i>
      </span>
      <br />
      <span class="label">date-time_letter-day</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-date-time_letter-hour"></i>
      </span>
      <br />
      <span class="label">date-time_letter-hour</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-date-time_letter-minute"></i>
      </span>
      <br />
      <span class="label">date-time_letter-minute</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-date-time_letter-month"></i>
      </span>
      <br />
      <span class="label">date-time_letter-month</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-date-time_letter-second"></i>
      </span>
      <br />
      <span class="label">date-time_letter-second</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-date-time_letter-time"></i>
      </span>
      <br />
      <span class="label">date-time_letter-time</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-date-time_letter-year"></i>
      </span>
      <br />
      <span class="label">date-time_letter-year</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-date-time_sandglass"></i>
      </span>
      <br />
      <span class="label">date-time_sandglass</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-date-time_stopwatch"></i>
      </span>
      <br />
      <span class="label">date-time_stopwatch</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-date-time_sumbol-asterisk"></i>
      </span>
      <br />
      <span class="label">date-time_sumbol-asterisk</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-documents-folders_book_stack"></i>
      </span>
      <br />
      <span class="label">documents-folders_book_stack</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-documents-folders_box-open-arrow-down"></i>
      </span>
      <br />
      <span class="label">documents-folders_box-open-arrow-down</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-documents-folders_box"></i>
      </span>
      <br />
      <span class="label">documents-folders_box</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-documents-folders_cloud arrow_down"></i>
      </span>
      <br />
      <span class="label">documents-folders_cloud arrow_down</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-documents-folders_cloud arrow_up_inside"></i>
      </span>
      <br />
      <span class="label">documents-folders_cloud arrow_up_inside</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-documents-folders_cloud arrow_up"></i>
      </span>
      <br />
      <span class="label">documents-folders_cloud arrow_up</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-documents-folders_cloud check"></i>
      </span>
      <br />
      <span class="label">documents-folders_cloud check</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-documents-folders_cloud"></i>
      </span>
      <br />
      <span class="label">documents-folders_cloud</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-documents-folders_collection-2"></i>
      </span>
      <br />
      <span class="label">documents-folders_collection-2</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-documents-folders_file arrow_down_left"></i>
      </span>
      <br />
      <span class="label">documents-folders_file arrow_down_left</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-documents-folders_file arrow_down"></i>
      </span>
      <br />
      <span class="label">documents-folders_file arrow_down</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-documents-folders_file arrow_up"></i>
      </span>
      <br />
      <span class="label">documents-folders_file arrow_up</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-documents-folders_file arrow"></i>
      </span>
      <br />
      <span class="label">documents-folders_file arrow</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-documents-folders_file arrows_up_right"></i>
      </span>
      <br />
      <span class="label">documents-folders_file arrows_up_right</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-documents-folders_file camera"></i>
      </span>
      <br />
      <span class="label">documents-folders_file camera</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-documents-folders_file cross_out"></i>
      </span>
      <br />
      <span class="label">documents-folders_file cross_out</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-documents-folders_file cross"></i>
      </span>
      <br />
      <span class="label">documents-folders_file cross</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-documents-folders_file doc"></i>
      </span>
      <br />
      <span class="label">documents-folders_file doc</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-documents-folders_file docx"></i>
      </span>
      <br />
      <span class="label">documents-folders_file docx</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-documents-folders_file dot"></i>
      </span>
      <br />
      <span class="label">documents-folders_file dot</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-documents-folders_file empty"></i>
      </span>
      <br />
      <span class="label">documents-folders_file empty</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-documents-folders_file exclamatioâ"></i>
      </span>
      <br />
      <span class="label">documents-folders_file exclamatioâ</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-documents-folders_file eye"></i>
      </span>
      <br />
      <span class="label">documents-folders_file eye</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-documents-folders_file filled"></i>
      </span>
      <br />
      <span class="label">documents-folders_file filled</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-documents-folders_file image"></i>
      </span>
      <br />
      <span class="label">documents-folders_file image</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-documents-folders_file magnifying_glass"></i>
      </span>
      <br />
      <span class="label">documents-folders_file magnifying_glass</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-documents-folders_file minus"></i>
      </span>
      <br />
      <span class="label">documents-folders_file minus</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-documents-folders_file pdf"></i>
      </span>
      <br />
      <span class="label">documents-folders_file pdf</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-documents-folders_file pen"></i>
      </span>
      <br />
      <span class="label">documents-folders_file pen</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-documents-folders_file play"></i>
      </span>
      <br />
      <span class="label">documents-folders_file play</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-documents-folders_file plus"></i>
      </span>
      <br />
      <span class="label">documents-folders_file plus</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-documents-folders_file ppt"></i>
      </span>
      <br />
      <span class="label">documents-folders_file ppt</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-documents-folders_file pptx"></i>
      </span>
      <br />
      <span class="label">documents-folders_file pptx</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-documents-folders_file txt"></i>
      </span>
      <br />
      <span class="label">documents-folders_file txt</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-documents-folders_file up_right"></i>
      </span>
      <br />
      <span class="label">documents-folders_file up_right</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-documents-folders_file xls"></i>
      </span>
      <br />
      <span class="label">documents-folders_file xls</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-documents-folders_file xlsx"></i>
      </span>
      <br />
      <span class="label">documents-folders_file xlsx</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-documents-folders_floppy cross_out"></i>
      </span>
      <br />
      <span class="label">documents-folders_floppy cross_out</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-documents-folders_floppy cross"></i>
      </span>
      <br />
      <span class="label">documents-folders_floppy cross</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-documents-folders_floppy pen"></i>
      </span>
      <br />
      <span class="label">documents-folders_floppy pen</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-documents-folders_floppy star"></i>
      </span>
      <br />
      <span class="label">documents-folders_floppy star</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-documents-folders_floppy"></i>
      </span>
      <br />
      <span class="label">documents-folders_floppy</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-documents-folders_folder arrow_down_left"></i>
      </span>
      <br />
      <span class="label">documents-folders_folder arrow_down_left</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-documents-folders_folder arrow_down"></i>
      </span>
      <br />
      <span class="label">documents-folders_folder arrow_down</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-documents-folders_folder arrow_up_right"></i>
      </span>
      <br />
      <span class="label">documents-folders_folder arrow_up_right</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-documents-folders_folder cross"></i>
      </span>
      <br />
      <span class="label">documents-folders_folder cross</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-documents-folders_folder dot"></i>
      </span>
      <br />
      <span class="label">documents-folders_folder dot</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-documents-folders_folder minus"></i>
      </span>
      <br />
      <span class="label">documents-folders_folder minus</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-documents-folders_folder plus"></i>
      </span>
      <br />
      <span class="label">documents-folders_folder plus</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-documents-folders_folder_open"></i>
      </span>
      <br />
      <span class="label">documents-folders_folder_open</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-documents-folders_folder_underline minus"></i>
      </span>
      <br />
      <span class="label">documents-folders_folder_underline minus</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-documents-folders_folder_underline plus"></i>
      </span>
      <br />
      <span class="label">documents-folders_folder_underline plus</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-documents-folders_folder_underline"></i>
      </span>
      <br />
      <span class="label">documents-folders_folder_underline</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-documents-folders_folder"></i>
      </span>
      <br />
      <span class="label">documents-folders_folder</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-documents-folders_list_square"></i>
      </span>
      <br />
      <span class="label">documents-folders_list_square</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-documents-folders_list-tree-archive"></i>
      </span>
      <br />
      <span class="label">documents-folders_list-tree-archive</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-documents-folders_list-tree"></i>
      </span>
      <br />
      <span class="label">documents-folders_list-tree</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-documents-folders_list"></i>
      </span>
      <br />
      <span class="label">documents-folders_list</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-documents-folders_ontology"></i>
      </span>
      <br />
      <span class="label">documents-folders_ontology</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-documents-folders_specification"></i>
      </span>
      <br />
      <span class="label">documents-folders_specification</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-documents-folders_square arrows_curve_right_down"></i>
      </span>
      <br />
      <span class="label">documents-folders_square arrows_curve_right_down</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-documents-folders_square arrows_curve_up_right"></i>
      </span>
      <br />
      <span class="label">documents-folders_square arrows_curve_up_right</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-documents-folders_square excel"></i>
      </span>
      <br />
      <span class="label">documents-folders_square excel</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-documents-folders_square powerpoint"></i>
      </span>
      <br />
      <span class="label">documents-folders_square powerpoint</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-documents-folders_square word"></i>
      </span>
      <br />
      <span class="label">documents-folders_square word</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-documents-folders_tablet"></i>
      </span>
      <br />
      <span class="label">documents-folders_tablet</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-editor-decor_agenda-fill"></i>
      </span>
      <br />
      <span class="label">editor-decor_agenda-fill</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-editor-decor_align-bottom"></i>
      </span>
      <br />
      <span class="label">editor-decor_align-bottom</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-editor-decor_align-center-h"></i>
      </span>
      <br />
      <span class="label">editor-decor_align-center-h</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-editor-decor_align-center-v"></i>
      </span>
      <br />
      <span class="label">editor-decor_align-center-v</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-editor-decor_align-center"></i>
      </span>
      <br />
      <span class="label">editor-decor_align-center</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-editor-decor_align-justify"></i>
      </span>
      <br />
      <span class="label">editor-decor_align-justify</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-editor-decor_align-left"></i>
      </span>
      <br />
      <span class="label">editor-decor_align-left</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-editor-decor_align-right"></i>
      </span>
      <br />
      <span class="label">editor-decor_align-right</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-editor-decor_align-top"></i>
      </span>
      <br />
      <span class="label">editor-decor_align-top</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-editor-decor_array-fill"></i>
      </span>
      <br />
      <span class="label">editor-decor_array-fill</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-editor-decor_bars-sort"></i>
      </span>
      <br />
      <span class="label">editor-decor_bars-sort</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-editor-decor_bdrv-administration"></i>
      </span>
      <br />
      <span class="label">editor-decor_bdrv-administration</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-editor-decor_bezier-curve"></i>
      </span>
      <br />
      <span class="label">editor-decor_bezier-curve</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-editor-decor_bold"></i>
      </span>
      <br />
      <span class="label">editor-decor_bold</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-editor-decor_border-all"></i>
      </span>
      <br />
      <span class="label">editor-decor_border-all</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-editor-decor_border-bottom"></i>
      </span>
      <br />
      <span class="label">editor-decor_border-bottom</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-editor-decor_border-center-h"></i>
      </span>
      <br />
      <span class="label">editor-decor_border-center-h</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-editor-decor_border-center-v"></i>
      </span>
      <br />
      <span class="label">editor-decor_border-center-v</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-editor-decor_border-inner"></i>
      </span>
      <br />
      <span class="label">editor-decor_border-inner</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-editor-decor_border-left"></i>
      </span>
      <br />
      <span class="label">editor-decor_border-left</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-editor-decor_border-none"></i>
      </span>
      <br />
      <span class="label">editor-decor_border-none</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-editor-decor_border-outer"></i>
      </span>
      <br />
      <span class="label">editor-decor_border-outer</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-editor-decor_border-right"></i>
      </span>
      <br />
      <span class="label">editor-decor_border-right</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-editor-decor_border-top-left"></i>
      </span>
      <br />
      <span class="label">editor-decor_border-top-left</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-editor-decor_border-top"></i>
      </span>
      <br />
      <span class="label">editor-decor_border-top</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-editor-decor_brackets-curly"></i>
      </span>
      <br />
      <span class="label">editor-decor_brackets-curly</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-editor-decor_brackets-square"></i>
      </span>
      <br />
      <span class="label">editor-decor_brackets-square</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-editor-decor_broom"></i>
      </span>
      <br />
      <span class="label">editor-decor_broom</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-editor-decor_browser"></i>
      </span>
      <br />
      <span class="label">editor-decor_browser</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-editor-decor_brush"></i>
      </span>
      <br />
      <span class="label">editor-decor_brush</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-editor-decor_carousel-fill"></i>
      </span>
      <br />
      <span class="label">editor-decor_carousel-fill</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-editor-decor_code-download"></i>
      </span>
      <br />
      <span class="label">editor-decor_code-download</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-editor-decor_code-simple"></i>
      </span>
      <br />
      <span class="label">editor-decor_code-simple</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-editor-decor_code"></i>
      </span>
      <br />
      <span class="label">editor-decor_code</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-editor-decor_collage-fill"></i>
      </span>
      <br />
      <span class="label">editor-decor_collage-fill</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-editor-decor_column-fill"></i>
      </span>
      <br />
      <span class="label">editor-decor_column-fill</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-editor-decor_component"></i>
      </span>
      <br />
      <span class="label">editor-decor_component</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-editor-decor_copy-column"></i>
      </span>
      <br />
      <span class="label">editor-decor_copy-column</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-editor-decor_copy-row"></i>
      </span>
      <br />
      <span class="label">editor-decor_copy-row</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-editor-decor_crop"></i>
      </span>
      <br />
      <span class="label">editor-decor_crop</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-editor-decor_dashboard-fill"></i>
      </span>
      <br />
      <span class="label">editor-decor_dashboard-fill</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-editor-decor_dashboard-variant-fill"></i>
      </span>
      <br />
      <span class="label">editor-decor_dashboard-variant-fill</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-editor-decor_day-fill"></i>
      </span>
      <br />
      <span class="label">editor-decor_day-fill</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-editor-decor_eraser"></i>
      </span>
      <br />
      <span class="label">editor-decor_eraser</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-editor-decor_fill"></i>
      </span>
      <br />
      <span class="label">editor-decor_fill</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-editor-decor_function"></i>
      </span>
      <br />
      <span class="label">editor-decor_function</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-editor-decor_grid-fill"></i>
      </span>
      <br />
      <span class="label">editor-decor_grid-fill</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-editor-decor_grid"></i>
      </span>
      <br />
      <span class="label">editor-decor_grid</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-editor-decor_hashtag"></i>
      </span>
      <br />
      <span class="label">editor-decor_hashtag</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-editor-decor_headline-fill"></i>
      </span>
      <br />
      <span class="label">editor-decor_headline-fill</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-editor-decor_indent arrow-left"></i>
      </span>
      <br />
      <span class="label">editor-decor_indent arrow-left</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-editor-decor_indent arrow-right"></i>
      </span>
      <br />
      <span class="label">editor-decor_indent arrow-right</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-editor-decor_italic"></i>
      </span>
      <br />
      <span class="label">editor-decor_italic</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-editor-decor_keyboard close"></i>
      </span>
      <br />
      <span class="label">editor-decor_keyboard close</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-editor-decor_keyboard"></i>
      </span>
      <br />
      <span class="label">editor-decor_keyboard</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-editor-decor_layer-group-slash"></i>
      </span>
      <br />
      <span class="label">editor-decor_layer-group-slash</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-editor-decor_layer-group"></i>
      </span>
      <br />
      <span class="label">editor-decor_layer-group</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-editor-decor_line-height"></i>
      </span>
      <br />
      <span class="label">editor-decor_line-height</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-editor-decor_list-fill"></i>
      </span>
      <br />
      <span class="label">editor-decor_list-fill</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-editor-decor_list-ol"></i>
      </span>
      <br />
      <span class="label">editor-decor_list-ol</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-editor-decor_list-ul"></i>
      </span>
      <br />
      <span class="label">editor-decor_list-ul</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-editor-decor_magic wand"></i>
      </span>
      <br />
      <span class="label">editor-decor_magic wand</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-editor-decor_module-fill"></i>
      </span>
      <br />
      <span class="label">editor-decor_module-fill</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-editor-decor_npm"></i>
      </span>
      <br />
      <span class="label">editor-decor_npm</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-editor-decor_object-down-subtract"></i>
      </span>
      <br />
      <span class="label">editor-decor_object-down-subtract</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-editor-decor_object-exclude"></i>
      </span>
      <br />
      <span class="label">editor-decor_object-exclude</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-editor-decor_object-intersect"></i>
      </span>
      <br />
      <span class="label">editor-decor_object-intersect</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-editor-decor_object-selection"></i>
      </span>
      <br />
      <span class="label">editor-decor_object-selection</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-editor-decor_object-union"></i>
      </span>
      <br />
      <span class="label">editor-decor_object-union</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-editor-decor_object-up-subtract"></i>
      </span>
      <br />
      <span class="label">editor-decor_object-up-subtract</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-editor-decor_object"></i>
      </span>
      <br />
      <span class="label">editor-decor_object</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-editor-decor_palette"></i>
      </span>
      <br />
      <span class="label">editor-decor_palette</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-editor-decor_panel-down"></i>
      </span>
      <br />
      <span class="label">editor-decor_panel-down</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-editor-decor_panel-left"></i>
      </span>
      <br />
      <span class="label">editor-decor_panel-left</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-editor-decor_panel-right"></i>
      </span>
      <br />
      <span class="label">editor-decor_panel-right</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-editor-decor_panel-top"></i>
      </span>
      <br />
      <span class="label">editor-decor_panel-top</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-editor-decor_pantone"></i>
      </span>
      <br />
      <span class="label">editor-decor_pantone</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-editor-decor_percent"></i>
      </span>
      <br />
      <span class="label">editor-decor_percent</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-editor-decor_pi"></i>
      </span>
      <br />
      <span class="label">editor-decor_pi</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-editor-decor_plus-column-right"></i>
      </span>
      <br />
      <span class="label">editor-decor_plus-column-right</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-editor-decor_plus-column-top"></i>
      </span>
      <br />
      <span class="label">editor-decor_plus-column-top</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-editor-decor_polyline"></i>
      </span>
      <br />
      <span class="label">editor-decor_polyline</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-editor-decor_quilt-fill"></i>
      </span>
      <br />
      <span class="label">editor-decor_quilt-fill</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-editor-decor_ruler"></i>
      </span>
      <br />
      <span class="label">editor-decor_ruler</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-editor-decor_scissors"></i>
      </span>
      <br />
      <span class="label">editor-decor_scissors</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-editor-decor_send-backward"></i>
      </span>
      <br />
      <span class="label">editor-decor_send-backward</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-editor-decor_send-forward"></i>
      </span>
      <br />
      <span class="label">editor-decor_send-forward</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-editor-decor_sequential-fill"></i>
      </span>
      <br />
      <span class="label">editor-decor_sequential-fill</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-editor-decor_shovel"></i>
      </span>
      <br />
      <span class="label">editor-decor_shovel</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-editor-decor_sigma"></i>
      </span>
      <br />
      <span class="label">editor-decor_sigma</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-editor-decor_square-bracket-curly-right-1"></i>
      </span>
      <br />
      <span class="label">editor-decor_square-bracket-curly-right-1</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-editor-decor_square-bracket-curly-right"></i>
      </span>
      <br />
      <span class="label">editor-decor_square-bracket-curly-right</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-editor-decor_square-bracket-left"></i>
      </span>
      <br />
      <span class="label">editor-decor_square-bracket-left</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-editor-decor_square-bracket-right"></i>
      </span>
      <br />
      <span class="label">editor-decor_square-bracket-right</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-editor-decor_square-divide"></i>
      </span>
      <br />
      <span class="label">editor-decor_square-divide</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-editor-decor_square-minus"></i>
      </span>
      <br />
      <span class="label">editor-decor_square-minus</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-editor-decor_square-multiply"></i>
      </span>
      <br />
      <span class="label">editor-decor_square-multiply</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-editor-decor_square-percent"></i>
      </span>
      <br />
      <span class="label">editor-decor_square-percent</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-editor-decor_square-plus"></i>
      </span>
      <br />
      <span class="label">editor-decor_square-plus</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-editor-decor_star-line"></i>
      </span>
      <br />
      <span class="label">editor-decor_star-line</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-editor-decor_strikethrough"></i>
      </span>
      <br />
      <span class="label">editor-decor_strikethrough</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-editor-decor_subskrit-down"></i>
      </span>
      <br />
      <span class="label">editor-decor_subskrit-down</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-editor-decor_subskrit-up"></i>
      </span>
      <br />
      <span class="label">editor-decor_subskrit-up</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-editor-decor_table-down"></i>
      </span>
      <br />
      <span class="label">editor-decor_table-down</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-editor-decor_table-magnifying glass"></i>
      </span>
      <br />
      <span class="label">editor-decor_table-magnifying glass</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-editor-decor_table-right"></i>
      </span>
      <br />
      <span class="label">editor-decor_table-right</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-editor-decor_table-transpose"></i>
      </span>
      <br />
      <span class="label">editor-decor_table-transpose</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-editor-decor_table"></i>
      </span>
      <br />
      <span class="label">editor-decor_table</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-editor-decor_text-color"></i>
      </span>
      <br />
      <span class="label">editor-decor_text-color</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-editor-decor_text"></i>
      </span>
      <br />
      <span class="label">editor-decor_text</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-editor-decor_underlined"></i>
      </span>
      <br />
      <span class="label">editor-decor_underlined</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-editor-decor_vector-circle-one point"></i>
      </span>
      <br />
      <span class="label">editor-decor_vector-circle-one point</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-editor-decor_vector-circle-two point"></i>
      </span>
      <br />
      <span class="label">editor-decor_vector-circle-two point</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-editor-decor_vector-circle"></i>
      </span>
      <br />
      <span class="label">editor-decor_vector-circle</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-editor-decor_vector-line"></i>
      </span>
      <br />
      <span class="label">editor-decor_vector-line</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-editor-decor_vector-point"></i>
      </span>
      <br />
      <span class="label">editor-decor_vector-point</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-editor-decor_vector-polygon"></i>
      </span>
      <br />
      <span class="label">editor-decor_vector-polygon</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-editor-decor_vector-rectangle"></i>
      </span>
      <br />
      <span class="label">editor-decor_vector-rectangle</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-editor-decor_vector-square"></i>
      </span>
      <br />
      <span class="label">editor-decor_vector-square</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-editor-decor_vector-triangle"></i>
      </span>
      <br />
      <span class="label">editor-decor_vector-triangle</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-editor-decor_vectors-radius"></i>
      </span>
      <br />
      <span class="label">editor-decor_vectors-radius</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-editor-decor_window"></i>
      </span>
      <br />
      <span class="label">editor-decor_window</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-editor-decor_xmark-column-right"></i>
      </span>
      <br />
      <span class="label">editor-decor_xmark-column-right</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-editor-decor_xmark-column-top"></i>
      </span>
      <br />
      <span class="label">editor-decor_xmark-column-top</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-logistics-transportation_airplane-side view"></i>
      </span>
      <br />
      <span class="label">logistics-transportation_airplane-side view</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-logistics-transportation_airplane-top view"></i>
      </span>
      <br />
      <span class="label">logistics-transportation_airplane-top view</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-logistics-transportation_ambulance-side view"></i>
      </span>
      <br />
      <span class="label">logistics-transportation_ambulance-side view</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-logistics-transportation_car-jeep-side view"></i>
      </span>
      <br />
      <span class="label">logistics-transportation_car-jeep-side view</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-logistics-transportation_car-light-side view"></i>
      </span>
      <br />
      <span class="label">logistics-transportation_car-light-side view</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-logistics-transportation_concrete-mixer-side view"></i>
      </span>
      <br />
      <span class="label">logistics-transportation_concrete-mixer-side view</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-logistics-transportation_helicopter-side view"></i>
      </span>
      <br />
      <span class="label">logistics-transportation_helicopter-side view</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-logistics-transportation_minibus-side view"></i>
      </span>
      <br />
      <span class="label">logistics-transportation_minibus-side view</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-logistics-transportation_paver-side view"></i>
      </span>
      <br />
      <span class="label">logistics-transportation_paver-side view</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-logistics-transportation_pipe-node-side view"></i>
      </span>
      <br />
      <span class="label">logistics-transportation_pipe-node-side view</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-logistics-transportation_railcar-hopper-side view"></i>
      </span>
      <br />
      <span class="label">logistics-transportation_railcar-hopper-side view</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-logistics-transportation_railcar-side view"></i>
      </span>
      <br />
      <span class="label">logistics-transportation_railcar-side view</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-logistics-transportation_ship-front view"></i>
      </span>
      <br />
      <span class="label">logistics-transportation_ship-front view</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-logistics-transportation_ship-side view"></i>
      </span>
      <br />
      <span class="label">logistics-transportation_ship-side view</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-logistics-transportation_tankcar-oil-side view"></i>
      </span>
      <br />
      <span class="label">logistics-transportation_tankcar-oil-side view</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-logistics-transportation_tankcar-side view"></i>
      </span>
      <br />
      <span class="label">logistics-transportation_tankcar-side view</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-logistics-transportation_truck-dump-side view"></i>
      </span>
      <br />
      <span class="label">logistics-transportation_truck-dump-side view</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-logistics-transportation_truck-empty-side view"></i>
      </span>
      <br />
      <span class="label">logistics-transportation_truck-empty-side view</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-logistics-transportation_truck-garbage-side view"></i>
      </span>
      <br />
      <span class="label">logistics-transportation_truck-garbage-side view</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-logistics-transportation_truck-gasoline-side view"></i>
      </span>
      <br />
      <span class="label">logistics-transportation_truck-gasoline-side view</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-logistics-transportation_truck-side view"></i>
      </span>
      <br />
      <span class="label">logistics-transportation_truck-side view</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-map-location_compass"></i>
      </span>
      <br />
      <span class="label">map-location_compass</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-map-location_crosshairs-dot"></i>
      </span>
      <br />
      <span class="label">map-location_crosshairs-dot</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-map-location_crosshairs-simple"></i>
      </span>
      <br />
      <span class="label">map-location_crosshairs-simple</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-map-location_location-arrow"></i>
      </span>
      <br />
      <span class="label">map-location_location-arrow</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-map-location_location-directly"></i>
      </span>
      <br />
      <span class="label">map-location_location-directly</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-map-location_location-dot"></i>
      </span>
      <br />
      <span class="label">map-location_location-dot</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-map-location_location-minus"></i>
      </span>
      <br />
      <span class="label">map-location_location-minus</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-map-location_location-plus"></i>
      </span>
      <br />
      <span class="label">map-location_location-plus</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-map-location_location-slash"></i>
      </span>
      <br />
      <span class="label">map-location_location-slash</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-map-location_location-user"></i>
      </span>
      <br />
      <span class="label">map-location_location-user</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-map-location_map-base"></i>
      </span>
      <br />
      <span class="label">map-location_map-base</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-map-location_map-pin"></i>
      </span>
      <br />
      <span class="label">map-location_map-pin</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-map-location_map"></i>
      </span>
      <br />
      <span class="label">map-location_map</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-map-location_thumbtack-directly"></i>
      </span>
      <br />
      <span class="label">map-location_thumbtack-directly</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-map-location_thumbtack"></i>
      </span>
      <br />
      <span class="label">map-location_thumbtack</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-map-location_world-2"></i>
      </span>
      <br />
      <span class="label">map-location_world-2</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-map-location_world"></i>
      </span>
      <br />
      <span class="label">map-location_world</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-multimedia-devices_android-pill"></i>
      </span>
      <br />
      <span class="label">multimedia-devices_android-pill</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-multimedia-devices_android"></i>
      </span>
      <br />
      <span class="label">multimedia-devices_android</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-multimedia-devices_audio-speakers"></i>
      </span>
      <br />
      <span class="label">multimedia-devices_audio-speakers</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-multimedia-devices_bookmark-music"></i>
      </span>
      <br />
      <span class="label">multimedia-devices_bookmark-music</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-multimedia-devices_camera-front"></i>
      </span>
      <br />
      <span class="label">multimedia-devices_camera-front</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-multimedia-devices_camera-movie-cross"></i>
      </span>
      <br />
      <span class="label">multimedia-devices_camera-movie-cross</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-multimedia-devices_camera-movie"></i>
      </span>
      <br />
      <span class="label">multimedia-devices_camera-movie</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-multimedia-devices_camera"></i>
      </span>
      <br />
      <span class="label">multimedia-devices_camera</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-multimedia-devices_cellphone-wireless"></i>
      </span>
      <br />
      <span class="label">multimedia-devices_cellphone-wireless</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-multimedia-devices_cellphone"></i>
      </span>
      <br />
      <span class="label">multimedia-devices_cellphone</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-multimedia-devices_circle-music"></i>
      </span>
      <br />
      <span class="label">multimedia-devices_circle-music</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-multimedia-devices_clapperboard-cross"></i>
      </span>
      <br />
      <span class="label">multimedia-devices_clapperboard-cross</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-multimedia-devices_clapperboard-open"></i>
      </span>
      <br />
      <span class="label">multimedia-devices_clapperboard-open</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-multimedia-devices_desktop-tower"></i>
      </span>
      <br />
      <span class="label">multimedia-devices_desktop-tower</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-multimedia-devices_file-music"></i>
      </span>
      <br />
      <span class="label">multimedia-devices_file-music</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-multimedia-devices_film-cross"></i>
      </span>
      <br />
      <span class="label">multimedia-devices_film-cross</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-multimedia-devices_film"></i>
      </span>
      <br />
      <span class="label">multimedia-devices_film</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-multimedia-devices_forvard-step"></i>
      </span>
      <br />
      <span class="label">multimedia-devices_forvard-step</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-multimedia-devices_forward"></i>
      </span>
      <br />
      <span class="label">multimedia-devices_forward</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-multimedia-devices_hard-drive-outline"></i>
      </span>
      <br />
      <span class="label">multimedia-devices_hard-drive-outline</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-multimedia-devices_image"></i>
      </span>
      <br />
      <span class="label">multimedia-devices_image</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-multimedia-devices_infinity"></i>
      </span>
      <br />
      <span class="label">multimedia-devices_infinity</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-multimedia-devices_input-device"></i>
      </span>
      <br />
      <span class="label">multimedia-devices_input-device</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-multimedia-devices_laptop-phone-slash"></i>
      </span>
      <br />
      <span class="label">multimedia-devices_laptop-phone-slash</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-multimedia-devices_laptop-phone"></i>
      </span>
      <br />
      <span class="label">multimedia-devices_laptop-phone</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-multimedia-devices_laptop-slash"></i>
      </span>
      <br />
      <span class="label">multimedia-devices_laptop-slash</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-multimedia-devices_laptop"></i>
      </span>
      <br />
      <span class="label">multimedia-devices_laptop</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-multimedia-devices_microphone-slash"></i>
      </span>
      <br />
      <span class="label">multimedia-devices_microphone-slash</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-multimedia-devices_microphone"></i>
      </span>
      <br />
      <span class="label">multimedia-devices_microphone</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-multimedia-devices_monitor"></i>
      </span>
      <br />
      <span class="label">multimedia-devices_monitor</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-multimedia-devices_music-slash"></i>
      </span>
      <br />
      <span class="label">multimedia-devices_music-slash</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-multimedia-devices_music"></i>
      </span>
      <br />
      <span class="label">multimedia-devices_music</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-multimedia-devices_pause"></i>
      </span>
      <br />
      <span class="label">multimedia-devices_pause</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-multimedia-devices_play-back"></i>
      </span>
      <br />
      <span class="label">multimedia-devices_play-back</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-multimedia-devices_play"></i>
      </span>
      <br />
      <span class="label">multimedia-devices_play</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-multimedia-devices_printer"></i>
      </span>
      <br />
      <span class="label">multimedia-devices_printer</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-multimedia-devices_push-button-cellphone"></i>
      </span>
      <br />
      <span class="label">multimedia-devices_push-button-cellphone</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-multimedia-devices_return-step"></i>
      </span>
      <br />
      <span class="label">multimedia-devices_return-step</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-multimedia-devices_return"></i>
      </span>
      <br />
      <span class="label">multimedia-devices_return</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-multimedia-devices_square-music-double"></i>
      </span>
      <br />
      <span class="label">multimedia-devices_square-music-double</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-multimedia-devices_square-music"></i>
      </span>
      <br />
      <span class="label">multimedia-devices_square-music</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-multimedia-devices_stop"></i>
      </span>
      <br />
      <span class="label">multimedia-devices_stop</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-multimedia-devices_tablet"></i>
      </span>
      <br />
      <span class="label">multimedia-devices_tablet</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-multimedia-devices_touchpad"></i>
      </span>
      <br />
      <span class="label">multimedia-devices_touchpad</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-multimedia-devices_transmitter"></i>
      </span>
      <br />
      <span class="label">multimedia-devices_transmitter</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-multimedia-devices_tv"></i>
      </span>
      <br />
      <span class="label">multimedia-devices_tv</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-multimedia-devices_video-cross"></i>
      </span>
      <br />
      <span class="label">multimedia-devices_video-cross</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-multimedia-devices_video-slash"></i>
      </span>
      <br />
      <span class="label">multimedia-devices_video-slash</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-multimedia-devices_video"></i>
      </span>
      <br />
      <span class="label">multimedia-devices_video</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-multimedia-devices_voicemail"></i>
      </span>
      <br />
      <span class="label">multimedia-devices_voicemail</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-multimedia-devices_volume-cross"></i>
      </span>
      <br />
      <span class="label">multimedia-devices_volume-cross</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-multimedia-devices_volume-low"></i>
      </span>
      <br />
      <span class="label">multimedia-devices_volume-low</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-multimedia-devices_volume-minus"></i>
      </span>
      <br />
      <span class="label">multimedia-devices_volume-minus</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-multimedia-devices_volume-off"></i>
      </span>
      <br />
      <span class="label">multimedia-devices_volume-off</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-multimedia-devices_volume-plus"></i>
      </span>
      <br />
      <span class="label">multimedia-devices_volume-plus</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-multimedia-devices_volume-slash"></i>
      </span>
      <br />
      <span class="label">multimedia-devices_volume-slash</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-multimedia-devices_volume"></i>
      </span>
      <br />
      <span class="label">multimedia-devices_volume</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-multimedia-devices_watch"></i>
      </span>
      <br />
      <span class="label">multimedia-devices_watch</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-multimedia-devices_webcam"></i>
      </span>
      <br />
      <span class="label">multimedia-devices_webcam</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-notifications-alerts_bell-fill"></i>
      </span>
      <br />
      <span class="label">notifications-alerts_bell-fill</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-notifications-alerts_bell-plus"></i>
      </span>
      <br />
      <span class="label">notifications-alerts_bell-plus</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-notifications-alerts_bell-ring-fill"></i>
      </span>
      <br />
      <span class="label">notifications-alerts_bell-ring-fill</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-notifications-alerts_bell-ring"></i>
      </span>
      <br />
      <span class="label">notifications-alerts_bell-ring</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-notifications-alerts_bell-slash"></i>
      </span>
      <br />
      <span class="label">notifications-alerts_bell-slash</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-notifications-alerts_bell"></i>
      </span>
      <br />
      <span class="label">notifications-alerts_bell</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-notifications-alerts_check-double"></i>
      </span>
      <br />
      <span class="label">notifications-alerts_check-double</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-notifications-alerts_chek"></i>
      </span>
      <br />
      <span class="label">notifications-alerts_chek</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-notifications-alerts_circle-chek-empty"></i>
      </span>
      <br />
      <span class="label">notifications-alerts_circle-chek-empty</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-notifications-alerts_circle-chek-fill"></i>
      </span>
      <br />
      <span class="label">notifications-alerts_circle-chek-fill</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-notifications-alerts_circle-exclamation-empty"></i>
      </span>
      <br />
      <span class="label">notifications-alerts_circle-exclamation-empty</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-notifications-alerts_circle-exclamation-fill"></i>
      </span>
      <br />
      <span class="label">notifications-alerts_circle-exclamation-fill</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-notifications-alerts_circle-info-empty"></i>
      </span>
      <br />
      <span class="label">notifications-alerts_circle-info-empty</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-notifications-alerts_circle-info-fill"></i>
      </span>
      <br />
      <span class="label">notifications-alerts_circle-info-fill</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-notifications-alerts_circle-question-empty"></i>
      </span>
      <br />
      <span class="label">notifications-alerts_circle-question-empty</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-notifications-alerts_circle-question-fill"></i>
      </span>
      <br />
      <span class="label">notifications-alerts_circle-question-fill</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-notifications-alerts_decagram-chek-empty"></i>
      </span>
      <br />
      <span class="label">notifications-alerts_decagram-chek-empty</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-notifications-alerts_decagram-chek-fill"></i>
      </span>
      <br />
      <span class="label">notifications-alerts_decagram-chek-fill</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-notifications-alerts_decagram-exclamation-empty"></i>
      </span>
      <br />
      <span class="label">notifications-alerts_decagram-exclamation-empty</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-notifications-alerts_decagram-exclamation-fill"></i>
      </span>
      <br />
      <span class="label">notifications-alerts_decagram-exclamation-fill</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-notifications-alerts_exclamation"></i>
      </span>
      <br />
      <span class="label">notifications-alerts_exclamation</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-notifications-alerts_flag-fill-red"></i>
      </span>
      <br />
      <span class="label">notifications-alerts_flag-fill-red</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-notifications-alerts_flag-fill"></i>
      </span>
      <br />
      <span class="label">notifications-alerts_flag-fill</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-notifications-alerts_flag"></i>
      </span>
      <br />
      <span class="label">notifications-alerts_flag</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-notifications-alerts_hexagon-exclamation-empty"></i>
      </span>
      <br />
      <span class="label">notifications-alerts_hexagon-exclamation-empty</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-notifications-alerts_hexagon-exclamation-fill"></i>
      </span>
      <br />
      <span class="label">notifications-alerts_hexagon-exclamation-fill</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-notifications-alerts_info"></i>
      </span>
      <br />
      <span class="label">notifications-alerts_info</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-notifications-alerts_question"></i>
      </span>
      <br />
      <span class="label">notifications-alerts_question</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-notifications-alerts_square-exclamation-empty"></i>
      </span>
      <br />
      <span class="label">notifications-alerts_square-exclamation-empty</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-notifications-alerts_square-exclamation-fill"></i>
      </span>
      <br />
      <span class="label">notifications-alerts_square-exclamation-fill</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-notifications-alerts_square-info-empty"></i>
      </span>
      <br />
      <span class="label">notifications-alerts_square-info-empty</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-notifications-alerts_square-info-fill"></i>
      </span>
      <br />
      <span class="label">notifications-alerts_square-info-fill</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-notifications-alerts_square-question-empty"></i>
      </span>
      <br />
      <span class="label">notifications-alerts_square-question-empty</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-notifications-alerts_square-question-fill"></i>
      </span>
      <br />
      <span class="label">notifications-alerts_square-question-fill</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-notifications-alerts_triangle-cross-empty"></i>
      </span>
      <br />
      <span class="label">notifications-alerts_triangle-cross-empty</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-notifications-alerts_triangle-exclamation-empty"></i>
      </span>
      <br />
      <span class="label">notifications-alerts_triangle-exclamation-empty</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-notifications-alerts_triangle-exclamation-fill"></i>
      </span>
      <br />
      <span class="label">notifications-alerts_triangle-exclamation-fill</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-notifications-alerts_triangle-info-empty"></i>
      </span>
      <br />
      <span class="label">notifications-alerts_triangle-info-empty</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-notifications-alerts_triangle-info-fill"></i>
      </span>
      <br />
      <span class="label">notifications-alerts_triangle-info-fill</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-notifications-alerts_triangle-plus-empty"></i>
      </span>
      <br />
      <span class="label">notifications-alerts_triangle-plus-empty</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-other_award"></i>
      </span>
      <br />
      <span class="label">other_award</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-other_default-ico"></i>
      </span>
      <br />
      <span class="label">other_default-ico</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-other_face-frown"></i>
      </span>
      <br />
      <span class="label">other_face-frown</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-other_face-smile"></i>
      </span>
      <br />
      <span class="label">other_face-smile</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-other_git-lab"></i>
      </span>
      <br />
      <span class="label">other_git-lab</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-other_instagram"></i>
      </span>
      <br />
      <span class="label">other_instagram</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-other_logo-grey-z"></i>
      </span>
      <br />
      <span class="label">other_logo-grey-z</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-other_logo-s.grey"></i>
      </span>
      <br />
      <span class="label">other_logo-s.grey</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-other_map-marker-date-1"></i>
      </span>
      <br />
      <span class="label">other_map-marker-date-1</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-other_map-marker-date-2"></i>
      </span>
      <br />
      <span class="label">other_map-marker-date-2</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-other_owl"></i>
      </span>
      <br />
      <span class="label">other_owl</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-other_portfel"></i>
      </span>
      <br />
      <span class="label">other_portfel</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-other_temperature-minus"></i>
      </span>
      <br />
      <span class="label">other_temperature-minus</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-other_temperature-plus"></i>
      </span>
      <br />
      <span class="label">other_temperature-plus</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-other_temperature"></i>
      </span>
      <br />
      <span class="label">other_temperature</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-other_template"></i>
      </span>
      <br />
      <span class="label">other_template</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-other_umbrella"></i>
      </span>
      <br />
      <span class="label">other_umbrella</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-power-energy_battery-bolt"></i>
      </span>
      <br />
      <span class="label">power-energy_battery-bolt</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-power-energy_battery-empty"></i>
      </span>
      <br />
      <span class="label">power-energy_battery-empty</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-power-energy_battery-exclametion mark"></i>
      </span>
      <br />
      <span class="label">power-energy_battery-exclametion mark</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-power-energy_battery-full"></i>
      </span>
      <br />
      <span class="label">power-energy_battery-full</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-power-energy_battery-half"></i>
      </span>
      <br />
      <span class="label">power-energy_battery-half</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-power-energy_battery-minus"></i>
      </span>
      <br />
      <span class="label">power-energy_battery-minus</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-power-energy_battery-plus"></i>
      </span>
      <br />
      <span class="label">power-energy_battery-plus</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-power-energy_battery-quarter"></i>
      </span>
      <br />
      <span class="label">power-energy_battery-quarter</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-power-energy_battery-three-quarters"></i>
      </span>
      <br />
      <span class="label">power-energy_battery-three-quarters</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-power-energy_energy-check"></i>
      </span>
      <br />
      <span class="label">power-energy_energy-check</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-power-energy_energy-slash"></i>
      </span>
      <br />
      <span class="label">power-energy_energy-slash</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-power-energy_energy"></i>
      </span>
      <br />
      <span class="label">power-energy_energy</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-power-energy_pulse"></i>
      </span>
      <br />
      <span class="label">power-energy_pulse</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-production-industry_balloon"></i>
      </span>
      <br />
      <span class="label">production-industry_balloon</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-production-industry_boiler-hot-water-gas-and-oil"></i>
      </span>
      <br />
      <span class="label">production-industry_boiler-hot-water-gas-and-oil</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-production-industry_boiler"></i>
      </span>
      <br />
      <span class="label">production-industry_boiler</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-production-industry_burn"></i>
      </span>
      <br />
      <span class="label">production-industry_burn</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-production-industry_carbon"></i>
      </span>
      <br />
      <span class="label">production-industry_carbon</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-production-industry_cart-flatbed-container"></i>
      </span>
      <br />
      <span class="label">production-industry_cart-flatbed-container</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-production-industry_container 2"></i>
      </span>
      <br />
      <span class="label">production-industry_container 2</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-production-industry_container"></i>
      </span>
      <br />
      <span class="label">production-industry_container</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-production-industry_containers"></i>
      </span>
      <br />
      <span class="label">production-industry_containers</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-production-industry_crane"></i>
      </span>
      <br />
      <span class="label">production-industry_crane</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-production-industry_cube-empty"></i>
      </span>
      <br />
      <span class="label">production-industry_cube-empty</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-production-industry_cube-fill"></i>
      </span>
      <br />
      <span class="label">production-industry_cube-fill</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-production-industry_cubes"></i>
      </span>
      <br />
      <span class="label">production-industry_cubes</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-production-industry_early-version"></i>
      </span>
      <br />
      <span class="label">production-industry_early-version</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-production-industry_electrics"></i>
      </span>
      <br />
      <span class="label">production-industry_electrics</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-production-industry_exchanger"></i>
      </span>
      <br />
      <span class="label">production-industry_exchanger</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-production-industry_factory-pipe"></i>
      </span>
      <br />
      <span class="label">production-industry_factory-pipe</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-production-industry_factory-pipes"></i>
      </span>
      <br />
      <span class="label">production-industry_factory-pipes</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-production-industry_factory"></i>
      </span>
      <br />
      <span class="label">production-industry_factory</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-production-industry_fan"></i>
      </span>
      <br />
      <span class="label">production-industry_fan</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-production-industry_fire"></i>
      </span>
      <br />
      <span class="label">production-industry_fire</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-production-industry_flask-round-potion"></i>
      </span>
      <br />
      <span class="label">production-industry_flask-round-potion</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-production-industry_flask"></i>
      </span>
      <br />
      <span class="label">production-industry_flask</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-production-industry_fuel-oil-tank"></i>
      </span>
      <br />
      <span class="label">production-industry_fuel-oil-tank</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-production-industry_gas-monitoring"></i>
      </span>
      <br />
      <span class="label">production-industry_gas-monitoring</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-production-industry_gas-pump"></i>
      </span>
      <br />
      <span class="label">production-industry_gas-pump</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-production-industry_gas"></i>
      </span>
      <br />
      <span class="label">production-industry_gas</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-production-industry_gear-cooling"></i>
      </span>
      <br />
      <span class="label">production-industry_gear-cooling</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-production-industry_generator"></i>
      </span>
      <br />
      <span class="label">production-industry_generator</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-production-industry_lng-storage"></i>
      </span>
      <br />
      <span class="label">production-industry_lng-storage</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-production-industry_medical"></i>
      </span>
      <br />
      <span class="label">production-industry_medical</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-production-industry_ni-fi-logo"></i>
      </span>
      <br />
      <span class="label">production-industry_ni-fi-logo</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-production-industry_oil-barrel"></i>
      </span>
      <br />
      <span class="label">production-industry_oil-barrel</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-production-industry_oil-canister"></i>
      </span>
      <br />
      <span class="label">production-industry_oil-canister</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-production-industry_oil-droplet-arrows-all"></i>
      </span>
      <br />
      <span class="label">production-industry_oil-droplet-arrows-all</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-production-industry_oil-droplet-arrows-repeat-h"></i>
      </span>
      <br />
      <span class="label">production-industry_oil-droplet-arrows-repeat-h</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-production-industry_oil-droplet-chek"></i>
      </span>
      <br />
      <span class="label">production-industry_oil-droplet-chek</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-production-industry_oil-droplet"></i>
      </span>
      <br />
      <span class="label">production-industry_oil-droplet</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-production-industry_oil-field"></i>
      </span>
      <br />
      <span class="label">production-industry_oil-field</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-production-industry_oil-tank"></i>
      </span>
      <br />
      <span class="label">production-industry_oil-tank</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-production-industry_pipe-sensor"></i>
      </span>
      <br />
      <span class="label">production-industry_pipe-sensor</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-production-industry_pipe-valve"></i>
      </span>
      <br />
      <span class="label">production-industry_pipe-valve</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-production-industry_pipeline 2"></i>
      </span>
      <br />
      <span class="label">production-industry_pipeline 2</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-production-industry_pipeline"></i>
      </span>
      <br />
      <span class="label">production-industry_pipeline</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-production-industry_press"></i>
      </span>
      <br />
      <span class="label">production-industry_press</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-production-industry_pump-triangle-down"></i>
      </span>
      <br />
      <span class="label">production-industry_pump-triangle-down</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-production-industry_pump"></i>
      </span>
      <br />
      <span class="label">production-industry_pump</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-production-industry_radiation"></i>
      </span>
      <br />
      <span class="label">production-industry_radiation</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-production-industry_respirator-1"></i>
      </span>
      <br />
      <span class="label">production-industry_respirator-1</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-production-industry_respirator-2"></i>
      </span>
      <br />
      <span class="label">production-industry_respirator-2</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-production-industry_respirator-3"></i>
      </span>
      <br />
      <span class="label">production-industry_respirator-3</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-production-industry_respirator-4"></i>
      </span>
      <br />
      <span class="label">production-industry_respirator-4</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-production-industry_respirator-5"></i>
      </span>
      <br />
      <span class="label">production-industry_respirator-5</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-production-industry_respirator-6"></i>
      </span>
      <br />
      <span class="label">production-industry_respirator-6</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-production-industry_seedling-circle"></i>
      </span>
      <br />
      <span class="label">production-industry_seedling-circle</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-production-industry_seedling-rectangle"></i>
      </span>
      <br />
      <span class="label">production-industry_seedling-rectangle</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-production-industry_seedling"></i>
      </span>
      <br />
      <span class="label">production-industry_seedling</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-production-industry_separator"></i>
      </span>
      <br />
      <span class="label">production-industry_separator</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-production-industry_snake-cup"></i>
      </span>
      <br />
      <span class="label">production-industry_snake-cup</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-production-industry_snowflake-up-to bracket"></i>
      </span>
      <br />
      <span class="label">production-industry_snowflake-up-to bracket</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-production-industry_snowflake"></i>
      </span>
      <br />
      <span class="label">production-industry_snowflake</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-production-industry_speed-reduction-cooling"></i>
      </span>
      <br />
      <span class="label">production-industry_speed-reduction-cooling</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-production-industry_steam-boiler"></i>
      </span>
      <br />
      <span class="label">production-industry_steam-boiler</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-production-industry_steam-turbine"></i>
      </span>
      <br />
      <span class="label">production-industry_steam-turbine</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-production-industry_steam"></i>
      </span>
      <br />
      <span class="label">production-industry_steam</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-production-industry_tank-1"></i>
      </span>
      <br />
      <span class="label">production-industry_tank-1</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-production-industry_tank"></i>
      </span>
      <br />
      <span class="label">production-industry_tank</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-production-industry_vial-arrow-rotate-left"></i>
      </span>
      <br />
      <span class="label">production-industry_vial-arrow-rotate-left</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-production-industry_vial-flask"></i>
      </span>
      <br />
      <span class="label">production-industry_vial-flask</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-production-industry_vial-xmark"></i>
      </span>
      <br />
      <span class="label">production-industry_vial-xmark</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-production-industry_vial"></i>
      </span>
      <br />
      <span class="label">production-industry_vial</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-production-industry_water-heater"></i>
      </span>
      <br />
      <span class="label">production-industry_water-heater</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-production-industry_water-pump"></i>
      </span>
      <br />
      <span class="label">production-industry_water-pump</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-settings-tools_ban"></i>
      </span>
      <br />
      <span class="label">settings-tools_ban</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-settings-tools_bars"></i>
      </span>
      <br />
      <span class="label">settings-tools_bars</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-settings-tools_circle-plus-fill"></i>
      </span>
      <br />
      <span class="label">settings-tools_circle-plus-fill</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-settings-tools_circle-plus"></i>
      </span>
      <br />
      <span class="label">settings-tools_circle-plus</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-settings-tools_circle-xmark-fill"></i>
      </span>
      <br />
      <span class="label">settings-tools_circle-xmark-fill</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-settings-tools_circle-xmark"></i>
      </span>
      <br />
      <span class="label">settings-tools_circle-xmark</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-settings-tools_copy"></i>
      </span>
      <br />
      <span class="label">settings-tools_copy</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-settings-tools_delete-content"></i>
      </span>
      <br />
      <span class="label">settings-tools_delete-content</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-settings-tools_droplet-slash"></i>
      </span>
      <br />
      <span class="label">settings-tools_droplet-slash</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-settings-tools_droplet"></i>
      </span>
      <br />
      <span class="label">settings-tools_droplet</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-settings-tools_ellipsis-grid"></i>
      </span>
      <br />
      <span class="label">settings-tools_ellipsis-grid</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-settings-tools_ellipsis-h"></i>
      </span>
      <br />
      <span class="label">settings-tools_ellipsis-h</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-settings-tools_ellipsis-v"></i>
      </span>
      <br />
      <span class="label">settings-tools_ellipsis-v</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-settings-tools_eye-closed"></i>
      </span>
      <br />
      <span class="label">settings-tools_eye-closed</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-settings-tools_eye-slash"></i>
      </span>
      <br />
      <span class="label">settings-tools_eye-slash</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-settings-tools_eye"></i>
      </span>
      <br />
      <span class="label">settings-tools_eye</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-settings-tools_filter"></i>
      </span>
      <br />
      <span class="label">settings-tools_filter</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-settings-tools_gear-5"></i>
      </span>
      <br />
      <span class="label">settings-tools_gear-5</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-settings-tools_gear-8"></i>
      </span>
      <br />
      <span class="label">settings-tools_gear-8</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-settings-tools_grip-dots-vertical"></i>
      </span>
      <br />
      <span class="label">settings-tools_grip-dots-vertical</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-settings-tools_house-mini"></i>
      </span>
      <br />
      <span class="label">settings-tools_house-mini</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-settings-tools_house"></i>
      </span>
      <br />
      <span class="label">settings-tools_house</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-settings-tools_key"></i>
      </span>
      <br />
      <span class="label">settings-tools_key</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-settings-tools_library-plus"></i>
      </span>
      <br />
      <span class="label">settings-tools_library-plus</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-settings-tools_lightbulb"></i>
      </span>
      <br />
      <span class="label">settings-tools_lightbulb</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-settings-tools_link-break"></i>
      </span>
      <br />
      <span class="label">settings-tools_link-break</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-settings-tools_link-minus"></i>
      </span>
      <br />
      <span class="label">settings-tools_link-minus</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-settings-tools_link-plus"></i>
      </span>
      <br />
      <span class="label">settings-tools_link-plus</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-settings-tools_link-simple-h"></i>
      </span>
      <br />
      <span class="label">settings-tools_link-simple-h</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-settings-tools_link-simple"></i>
      </span>
      <br />
      <span class="label">settings-tools_link-simple</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-settings-tools_loader"></i>
      </span>
      <br />
      <span class="label">settings-tools_loader</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-settings-tools_lock"></i>
      </span>
      <br />
      <span class="label">settings-tools_lock</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-settings-tools_magnifying glass-exclamation"></i>
      </span>
      <br />
      <span class="label">settings-tools_magnifying glass-exclamation</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-settings-tools_magnifying glass-minus"></i>
      </span>
      <br />
      <span class="label">settings-tools_magnifying glass-minus</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-settings-tools_magnifying glass-plus"></i>
      </span>
      <br />
      <span class="label">settings-tools_magnifying glass-plus</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-settings-tools_magnifying glass-top-from bracket"></i>
      </span>
      <br />
      <span class="label">settings-tools_magnifying glass-top-from bracket</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-settings-tools_magnifying glass-triangle-down"></i>
      </span>
      <br />
      <span class="label">settings-tools_magnifying glass-triangle-down</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-settings-tools_magnifying glass-xmark"></i>
      </span>
      <br />
      <span class="label">settings-tools_magnifying glass-xmark</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-settings-tools_magnifying glass"></i>
      </span>
      <br />
      <span class="label">settings-tools_magnifying glass</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-settings-tools_minus-circle-fill"></i>
      </span>
      <br />
      <span class="label">settings-tools_minus-circle-fill</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-settings-tools_minus-circle"></i>
      </span>
      <br />
      <span class="label">settings-tools_minus-circle</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-settings-tools_minus"></i>
      </span>
      <br />
      <span class="label">settings-tools_minus</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-settings-tools_moon"></i>
      </span>
      <br />
      <span class="label">settings-tools_moon</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-settings-tools_paperclip-vertical"></i>
      </span>
      <br />
      <span class="label">settings-tools_paperclip-vertical</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-settings-tools_paperclip"></i>
      </span>
      <br />
      <span class="label">settings-tools_paperclip</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-settings-tools_pen-hammer"></i>
      </span>
      <br />
      <span class="label">settings-tools_pen-hammer</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-settings-tools_pencil arrow-right"></i>
      </span>
      <br />
      <span class="label">settings-tools_pencil arrow-right</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-settings-tools_pencil triangle-down"></i>
      </span>
      <br />
      <span class="label">settings-tools_pencil triangle-down</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-settings-tools_pencil triangle-left"></i>
      </span>
      <br />
      <span class="label">settings-tools_pencil triangle-left</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-settings-tools_pencil-line-bottom"></i>
      </span>
      <br />
      <span class="label">settings-tools_pencil-line-bottom</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-settings-tools_pencil"></i>
      </span>
      <br />
      <span class="label">settings-tools_pencil</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-settings-tools_pipette"></i>
      </span>
      <br />
      <span class="label">settings-tools_pipette</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-settings-tools_plus"></i>
      </span>
      <br />
      <span class="label">settings-tools_plus</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-settings-tools_power"></i>
      </span>
      <br />
      <span class="label">settings-tools_power</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-settings-tools_shield-exclamation"></i>
      </span>
      <br />
      <span class="label">settings-tools_shield-exclamation</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-settings-tools_shield-slash"></i>
      </span>
      <br />
      <span class="label">settings-tools_shield-slash</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-settings-tools_shield"></i>
      </span>
      <br />
      <span class="label">settings-tools_shield</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-settings-tools_sliders-h"></i>
      </span>
      <br />
      <span class="label">settings-tools_sliders-h</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-settings-tools_sliders-v"></i>
      </span>
      <br />
      <span class="label">settings-tools_sliders-v</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-settings-tools_sun"></i>
      </span>
      <br />
      <span class="label">settings-tools_sun</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-settings-tools_trash-empty"></i>
      </span>
      <br />
      <span class="label">settings-tools_trash-empty</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-settings-tools_trash"></i>
      </span>
      <br />
      <span class="label">settings-tools_trash</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-settings-tools_unlock"></i>
      </span>
      <br />
      <span class="label">settings-tools_unlock</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-settings-tools_wrench"></i>
      </span>
      <br />
      <span class="label">settings-tools_wrench</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-settings-tools_xmark-mini"></i>
      </span>
      <br />
      <span class="label">settings-tools_xmark-mini</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-settings-tools_xmark"></i>
      </span>
      <br />
      <span class="label">settings-tools_xmark</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-shape-geometry_arrange-send-to-back"></i>
      </span>
      <br />
      <span class="label">shape-geometry_arrange-send-to-back</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-shape-geometry_checkerboard"></i>
      </span>
      <br />
      <span class="label">shape-geometry_checkerboard</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-shape-geometry_circle square- in square"></i>
      </span>
      <br />
      <span class="label">shape-geometry_circle square- in square</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-shape-geometry_circle square-fill-1"></i>
      </span>
      <br />
      <span class="label">shape-geometry_circle square-fill-1</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-shape-geometry_circle square-fill"></i>
      </span>
      <br />
      <span class="label">shape-geometry_circle square-fill</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-shape-geometry_circle- in hexagon"></i>
      </span>
      <br />
      <span class="label">shape-geometry_circle- in hexagon</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-shape-geometry_circles-line-left-up circle-right-down-fill"></i>
      </span>
      <br />
      <span class="label">shape-geometry_circles-line-left-up circle-right-down-fill</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-shape-geometry_circles-line-left-up circle-right-down"></i>
      </span>
      <br />
      <span class="label">shape-geometry_circles-line-left-up circle-right-down</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-shape-geometry_collector"></i>
      </span>
      <br />
      <span class="label">shape-geometry_collector</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-shape-geometry_discrete-set"></i>
      </span>
      <br />
      <span class="label">shape-geometry_discrete-set</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-shape-geometry_hexagon-fill"></i>
      </span>
      <br />
      <span class="label">shape-geometry_hexagon-fill</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-shape-geometry_hexagon"></i>
      </span>
      <br />
      <span class="label">shape-geometry_hexagon</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-shape-geometry_pentagon-fill"></i>
      </span>
      <br />
      <span class="label">shape-geometry_pentagon-fill</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-shape-geometry_pentagon"></i>
      </span>
      <br />
      <span class="label">shape-geometry_pentagon</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-shape-geometry_rhombus-fill"></i>
      </span>
      <br />
      <span class="label">shape-geometry_rhombus-fill</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-shape-geometry_rhombus"></i>
      </span>
      <br />
      <span class="label">shape-geometry_rhombus</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-shape-geometry_ring- in square"></i>
      </span>
      <br />
      <span class="label">shape-geometry_ring- in square</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-shape-geometry_shape-4-f"></i>
      </span>
      <br />
      <span class="label">shape-geometry_shape-4-f</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-shape-geometry_shape-4"></i>
      </span>
      <br />
      <span class="label">shape-geometry_shape-4</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-shape-geometry_shape-6"></i>
      </span>
      <br />
      <span class="label">shape-geometry_shape-6</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-shape-geometry_shape-7"></i>
      </span>
      <br />
      <span class="label">shape-geometry_shape-7</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-shape-geometry_shape-plus"></i>
      </span>
      <br />
      <span class="label">shape-geometry_shape-plus</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-shape-geometry_square circle plus triangle-fill"></i>
      </span>
      <br />
      <span class="label">shape-geometry_square circle plus triangle-fill</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-shape-geometry_square circle triangle cross-fill"></i>
      </span>
      <br />
      <span class="label">shape-geometry_square circle triangle cross-fill</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-shape-geometry_square circle triangle cross"></i>
      </span>
      <br />
      <span class="label">shape-geometry_square circle triangle cross</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-shape-geometry_square hexagon circle-fill"></i>
      </span>
      <br />
      <span class="label">shape-geometry_square hexagon circle-fill</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-shape-geometry_square hexagon circle"></i>
      </span>
      <br />
      <span class="label">shape-geometry_square hexagon circle</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-shape-geometry_square triangle circle triangle-fill-1"></i>
      </span>
      <br />
      <span class="label">shape-geometry_square triangle circle triangle-fill-1</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-shape-geometry_square triangle circle triangle-fill"></i>
      </span>
      <br />
      <span class="label">shape-geometry_square triangle circle triangle-fill</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-shape-geometry_square-in square"></i>
      </span>
      <br />
      <span class="label">shape-geometry_square-in square</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-shape-geometry_triangle circle square-fill-1"></i>
      </span>
      <br />
      <span class="label">shape-geometry_triangle circle square-fill-1</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-shape-geometry_triangle circle square-fill"></i>
      </span>
      <br />
      <span class="label">shape-geometry_triangle circle square-fill</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-shape-geometry_triangle-fill"></i>
      </span>
      <br />
      <span class="label">shape-geometry_triangle-fill</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-shape-geometry_triangle"></i>
      </span>
      <br />
      <span class="label">shape-geometry_triangle</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-user-account_user-arrows swap"></i>
      </span>
      <br />
      <span class="label">user-account_user-arrows swap</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-user-account_user-card"></i>
      </span>
      <br />
      <span class="label">user-account_user-card</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-user-account_user-check"></i>
      </span>
      <br />
      <span class="label">user-account_user-check</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-user-account_user-circle"></i>
      </span>
      <br />
      <span class="label">user-account_user-circle</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-user-account_user-cross"></i>
      </span>
      <br />
      <span class="label">user-account_user-cross</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-user-account_user-gear"></i>
      </span>
      <br />
      <span class="label">user-account_user-gear</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-user-account_user-location"></i>
      </span>
      <br />
      <span class="label">user-account_user-location</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-user-account_user-minus"></i>
      </span>
      <br />
      <span class="label">user-account_user-minus</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-user-account_user-pen"></i>
      </span>
      <br />
      <span class="label">user-account_user-pen</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-user-account_user-plus"></i>
      </span>
      <br />
      <span class="label">user-account_user-plus</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-user-account_user-shield"></i>
      </span>
      <br />
      <span class="label">user-account_user-shield</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-user-account_user-worker"></i>
      </span>
      <br />
      <span class="label">user-account_user-worker</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-user-account_user"></i>
      </span>
      <br />
      <span class="label">user-account_user</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-user-account_users-arrow right"></i>
      </span>
      <br />
      <span class="label">user-account_users-arrow right</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-user-account_users-gear"></i>
      </span>
      <br />
      <span class="label">user-account_users-gear</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-user-account_users-key"></i>
      </span>
      <br />
      <span class="label">user-account_users-key</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-user-account_users-location"></i>
      </span>
      <br />
      <span class="label">user-account_users-location</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-user-account_users-minus"></i>
      </span>
      <br />
      <span class="label">user-account_users-minus</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-user-account_users-plus"></i>
      </span>
      <br />
      <span class="label">user-account_users-plus</span>
    </div>

    <div class="preview">
      <span class="inner">
        <i class="prizm-icons prizm-icons-user-account_users"></i>
      </span>
      <br />
      <span class="label">user-account_users</span>
    </div>
    `
    return area;
  },
  args: {
    label: 'Label',
  },
};
